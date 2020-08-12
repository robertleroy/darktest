<script>
  export default {
    name: 'searchDlg',
    data() {
      return {
        drag: false,
        searchTerm: '',
        placeholder: "Search..",
        errorMessage: 'must be at least 3 characters',
        showErrorMessage: false,
      };
    },

    computed: {
      savedLocations: {
        get() {
          return this.$store.getters.savedLocations;
        },
        set(value) {
          this.$store.commit('setSavedLocations', value);
        }
      },
      count() {
        return this.$store.getters.count;
      },
      
      recentLocations: {
        get() {
          return this.$store.getters.recentLocations;
        },
        set(value) {
          this.$store.commit('setRecentLocations', value);
        }
      },

      dragOptions() {
        return {
          animation: 200,
          disabled: false,
          ghostClass: "ghost",
          group: "combined",
          emptyInsertThreshold: 100,
          removeOnSpill: false,
          revertOnSpill: true,
        };
      }
    },

    methods: {       
      closeDialog() {
        this.$store.commit('toggleSearchDialog');
      },
      removeRecentItem(i) {
        if (confirm(`Remove ${this.recentLocations[i].city}?`)) {
          this.recentLocations.splice(i,1);
        }        
      },
      removeSavedItem(i) {
        if (confirm(`Remove ${this.savedLocations[i].city}?`)) {
          this.savedLocations.splice(i,1);
        }        
      },      
      setSelection(obj) { // set selected
        // this.$store.commit('setCurrentLocation', obj);        
        this.$store.dispatch('dispatchCurrentLocation', obj);

        // is it in recent loctions
        const x = this.recentLocations.findIndex(el => {
          return el.gps === obj.gps;
        })

        if (x>0) { // send it to front if in recent list
          console.log('shifting');
          this.recentLocations.splice(x,1);
          this.recentLocations.unshift(obj);
        }
        this.closeDialog();
      },
      
      getTomtom() {
        if (this.searchTerm.length > 2) {
          console.log('getTomtom', this.searchTerm);
          this.$store.dispatch('fetchTomtom', this.searchTerm);    
        } else {
          console.log('search must be 3+ characters long.')
        }
      },

      getIp() {
        this.$store.dispatch('fetchIp');
        this.closeDialog();
      }
    },

    mounted() {       
      this.$refs.searchBox.focus();
    }
  };
</script>

<template>
  <section id='modal'>
    
    <!-- <div class="panel" ref="panel"> -->
      
        <div class="inputBar">
          <div class="barGroup">

            <div class="searchGroup">            
              <div class="icon btn ip"
                    @click="getIp">my_location</div>
                    
              <input type="text" ref="searchBox"
                    v-model="searchTerm"
                    :placeholder="placeholder"
                    @keyup.enter="getTomtom">
              
              <div class="icon btn tomtom"
                    @click="getTomtom">search</div>
                    
            </div> <!-- searchGroup -->

            <div class="icon btn closeDialog" 
            @click="closeDialog">close</div>

          </div> <!-- barGroup -->
        </div> <!-- inputBar -->

        
        <!-- lists ============ -->
        <div class="lists">
          <div class="saved">
            <div class="label">Saved Locations:</div>
            <draggable class="list"
              v-model="savedLocations"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
              handle=".handle">

              <transition-group :name="!drag ? 'flip-list' : null">

                <div v-for="(item, i) of savedLocations" 
                    :key="i" class="list-item">
                  <div class="icon handle">drag_handle</div>
                  <div @click="setSelection(item)"
                      class="name">{{item.city}}</div>
                      <!-- <div>{{item.city}}</div> -->
                  <div class="icon btn removeItem"
                      @click="removeSavedItem(i)">delete</div>
                </div>

              </transition-group>
            </draggable>

            <div class="info">
              ~ drag recent searches here to save location ~
            </div>
          </div> <!-- saved -->

          <div class="recent">
            <div class="label">Recent Searches:</div>
            <draggable class="list"
                v-model="recentLocations"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
                handle=".handle">
              <transition-group :name="!drag ? 'flip-list' : null">

                <div v-for="(item, i) of recentLocations" 
                    :key="i" class="list-item">
                  <div class="icon handle">drag_handle</div>
                  <div @click="setSelection(item)"
                      class="name">{{item.city || item.regionName}}</div>
                      <!-- <div>{{item.city}}</div> -->
                  <div class="icon btn removeItem"
                      @click="removeRecentItem(i)">delete</div>
                </div>

              </transition-group>
            </draggable>
          </div> <!-- recent -->
        </div> <!-- lists -->
        <!-- lists ============ -->

    <!-- </div>  -->
    <!-- panel -->

  </section>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';

 
  #modal {
        
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    background: $backgroundColor;

    --searchGap: 0 0.5rem;   
    @include media(350px) {
      --searchGap: 0 1rem;
    }
  }

  .inputBar {
    position: sticky;
    top: 0;
    z-index: 15;
    min-height: 4rem;
    padding: 1rem 0 ;
    
    background: $backgroundColor;
    @include shadow(2);
  }

  .barGroup {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    grid-gap: var(--searchGap);
    padding: 0 1rem;

    @include media(760px) {
      padding: 0 2rem;
    }
  }

  .searchGroup {

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: var(--searchGap);
    
    height: 100%;
    width: 100%;
    max-width: 500px;

    margin: auto;

    input {
      text-align: center;
      user-select: none;
    }     

  }



  .lists {
    padding: 1rem 2rem;
    max-width: 500px;
    margin: auto;
    
  }

  .list {
    min-height: 32px;    
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .list-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 0.5rem;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid var(--muted-1);
    // font-size: var(--h7);
    cursor: pointer;

    .handle {
      margin-right: 1rem;
      cursor: move;
    }

    .icon {
      color: var(--muted-8);
    }
    
  }

  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .label, .info {
    font-size: var(--h8);
    color: var(--muted-5);
  }

  .label {
    line-height: 1;
  }

  .info {
    font-style: italic;
    text-align: center;
    margin-bottom: 1rem;
  }

</style>
<script>
export default {
  name: "icons",
  data() {
    return {
      title: "icons",
      // iconSizes: [
      //   0, 4, 8
      // ],
      fSize: '4rem',
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<template>
  <section id="icons">

    <select v-model="fSize" class="select">
      <option value="8rem">big</option>
      <option value="4rem">med</option>
      <option value="2rem">small</option>
    </select>

    <div class="list">
      <!--       clear day -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".137" y1=".133" x2=".859" y2=".847" id="gradient_orb">
                <stop offset="0" stop-color="#FF9800" />
                <stop offset="1" stop-color="#FFEB3B" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <path
                d="M6 0l1.607 2.12 2.636-.363-.363 2.636L12 6 9.88 7.607l.363 2.636-2.636-.363L6 12 4.393 9.88l-2.636.363.363-2.636L0 6l2.12-1.607-.363-2.636 2.636.363L6 0z"
                transform="translate(6.5 6.5)"
                id="rays_shadow"
                fill="#000000"
                fill-opacity="0.2"
                stroke="none"
              />
              <path
                d="M6 0l1.607 2.12 2.636-.363-.363 2.636L12 6 9.88 7.607l.363 2.636-2.636-.363L6 12 4.393 9.88l-2.636.363.363-2.636L0 6l2.12-1.607-.363-2.636 2.636.363L6 0z"
                transform="translate(6 6)"
                id="rays"
                fill="#FF6F00"
                stroke="none"
              />
              <path
                d="M0 4a4 4 0 118 0 4 4 0 01-8 0z"
                transform="translate(8.5 8.5)"
                id="orb_shadow"
                fill="#000000"
                fill-opacity="0.2"
                stroke="none"
              />
              <path
                d="M0 4a4 4 0 118 0 4 4 0 01-8 0z"
                transform="translate(8 8)"
                id="orb"
                fill="url(#gradient_orb)"
                stroke="none"
              />
            </g>
          </svg>
        </div>
      </div>
      <!--       clear night -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".197" y1=".129" x2=".802" y2=".873" id="gradient_moon">
                <stop offset="0" stop-color="#CCDFE0" />
                <stop offset="1" stop-color="#324853" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <path
                d="M5.74 1.362c.075-.282.189-.544.333-.782A3.997 3.997 0 00.137 2.965a3.997 3.997 0 107.723 2.07 3 3 0 01-2.12-3.673z"
                transform="translate(8.86 8.5)"
                id="moon_shadow"
                fill="#000000"
                fill-opacity="0.2"
                stroke="none"
              />
              <path
                d="M5.74 1.362c.075-.282.189-.544.333-.782A3.997 3.997 0 00.137 2.965a3.997 3.997 0 107.723 2.07 3 3 0 01-2.12-3.673z"
                transform="translate(8.36 8)"
                id="moon"
                fill="url(#gradient_moon)"
                stroke="none"
              />
            </g>
          </svg>
        </div>
      </div>
      <!--       partly day -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_clouds">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".137" y1=".133" x2=".859" y2=".847" id="gradient_orb">
                <stop offset="0" stop-color="#FF9800" />
                <stop offset="1" stop-color="#FFEB3B" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="Group-5" transform="translate(4 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_1_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud_1"
                  fill="url(#gradient_clouds)"
                />
              </g>
              <g id="Group-2" transform="translate(8 2)" stroke="none">
                <path
                  d="M6 0l1.607 2.12 2.636-.363-.363 2.636L12 6 9.88 7.607l.363 2.636-2.636-.363L6 12 4.393 9.88l-2.636.363.363-2.636L0 6l2.12-1.607-.363-2.636 2.636.363L6 0z"
                  transform="translate(.5 .5)"
                  id="rays_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M6 0l1.607 2.12 2.636-.363-.363 2.636L12 6 9.88 7.607l.363 2.636-2.636-.363L6 12 4.393 9.88l-2.636.363.363-2.636L0 6l2.12-1.607-.363-2.636 2.636.363L6 0z"
                  id="rays"
                  fill="#FF6F00"
                />
                <path
                  d="M0 4a4 4 0 118 0 4 4 0 01-8 0z"
                  transform="translate(2.5 2.5)"
                  id="orb_Shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M0 4a4 4 0 118 0 4 4 0 01-8 0z"
                  transform="translate(2 2)"
                  id="orb"
                  fill="url(#gradient_orb)"
                />
              </g>
              <g id="Group-4" transform="translate(7 10)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_2_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud_2"
                  fill="url(#gradient_clouds)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!--       partly night -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_1">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".197" y1=".129" x2=".802" y2=".873" id="gradient_moon">
                <stop offset="0" stop-color="#CCDFE0" />
                <stop offset="1" stop-color="#324853" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="Group-5" transform="translate(4 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-Copy-4"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="Vector-shape-Copy-3"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="Group" transform="translate(10 4)" stroke="none">
                <path
                  d="M5.74 1.362c.075-.282.189-.544.333-.782A3.997 3.997 0 00.137 2.965a3.997 3.997 0 107.723 2.07 3 3 0 01-2.12-3.673z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-3-Copy-7"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M5.74 1.362c.075-.282.189-.544.333-.782A3.997 3.997 0 00.137 2.965a3.997 3.997 0 107.723 2.07 3 3 0 01-2.12-3.673z"
                  id="Vector-shape-3-Copy-8"
                  fill="url(#gradient_moon)"
                />
              </g>
              <g id="Group-4" transform="translate(7 10)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-Copy-5"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="Vector-shape-Copy-2"
                  fill="url(#gradient_1)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!--       mostly day -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".137" y1=".133" x2=".859" y2=".847" id="gradient_orb">
                <stop offset="0" stop-color="#FF9800" />
                <stop offset="1" stop-color="#FFEB3B" />
              </linearGradient>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_cloud">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(11 9)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="sun" transform="translate(7 3)" stroke="none">
                <path
                  d="M6 0l1.607 2.12 2.636-.363-.363 2.636L12 6 9.88 7.607l.363 2.636-2.636-.363L6 12 4.393 9.88l-2.636.363.363-2.636L0 6l2.12-1.607-.363-2.636 2.636.363L6 0z"
                  transform="translate(.5 .5)"
                  id="rays_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M6 0l1.607 2.12 2.636-.363-.363 2.636L12 6 9.88 7.607l.363 2.636-2.636-.363L6 12 4.393 9.88l-2.636.363.363-2.636L0 6l2.12-1.607-.363-2.636 2.636.363L6 0z"
                  id="rays"
                  fill="#FF6F00"
                />
                <path
                  d="M0 4a4 4 0 118 0 4 4 0 01-8 0z"
                  transform="translate(2.5 2.5)"
                  id="orb_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M0 4a4 4 0 118 0 4 4 0 01-8 0z"
                  transform="translate(2 2)"
                  id="orb"
                  fill="url(#gradient_orb)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(3 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 10)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_cloud">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".197" y1=".129" x2=".802" y2=".873" id="gradient_moon">
                <stop offset="0" stop-color="#CCDFE0" />
                <stop offset="1" stop-color="#324853" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(11 9)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="Group" transform="translate(9 4)" stroke="none">
                <path
                  d="M5.74 1.362c.075-.282.189-.544.333-.782A3.997 3.997 0 00.137 2.965a3.997 3.997 0 107.723 2.07 3 3 0 01-2.12-3.673z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-3-Copy-7"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M5.74 1.362c.075-.282.189-.544.333-.782A3.997 3.997 0 00.137 2.965a3.997 3.997 0 107.723 2.07 3 3 0 01-2.12-3.673z"
                  id="Vector-shape-3-Copy-8"
                  fill="url(#gradient_moon)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(3 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 10)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!--       overcast -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_1">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud-Copy" transform="translate(3 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy-3" transform="translate(7 7)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud" transform="translate(11 9)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 10)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!--       storm -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_1">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(10 6)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(4 5)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_1">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".979" y1="-.01" x2=".06" y2=".974" id="gradient_2">
                <stop offset="0" stop-color="#E65100" />
                <stop offset="1" stop-color="#FFEB3B" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(10 6)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(4 5)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="Group" transform="translate(8 14)" stroke="none">
                <path
                  d="M1.25 3.5L0 7l5-3.5H3.75L5 0 0 3.5h1.25z"
                  transform="translate(.5 .5)"
                  id="New-shape-4"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.25 3.5L0 7l5-3.5H3.75L5 0 0 3.5h1.25z"
                  id="New-shape"
                  fill="url(#gradient_2)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!--       rain -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_cloud">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".251" y1=".241" x2=".881" y2=".874" id="gradient_rain">
                <stop offset="0" stop-color="#E1F5FE" />
                <stop offset="1" stop-color="#03A9F4" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(10 6)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(4 5)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="Group-6" transform="translate(10.5 18)" stroke="none">
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  transform="translate(.5 .5)"
                  id="Ellipse-2-Copy-2"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  id="Ellipse-2-Copy"
                  fill="url(#gradient_rain)"
                />
              </g>
              <g id="Group-7" transform="translate(5.5 16)" stroke="none">
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  transform="translate(.5 .5)"
                  id="Ellipse-2-Copy-2"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  id="Ellipse-2-Copy"
                  fill="url(#gradient_rain)"
                />
              </g>
              <g id="Group-6-Copy" transform="translate(15.5 14.5)" stroke="none">
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  transform="translate(.5 .5)"
                  id="Ellipse-2-Copy-2"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  id="Ellipse-2-Copy"
                  fill="url(#gradient_rain)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!--    light   rain -->
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_cloud">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".251" y1=".241" x2=".881" y2=".874" id="gradient_rain">
                <stop offset="0" stop-color="#E1F5FE" />
                <stop offset="1" stop-color="#03A9F4" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(10 6)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(4 5)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="Group-6" transform="translate(10.5 18)" stroke="none">
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  transform="translate(.5 .5)"
                  id="Ellipse-2-Copy-2"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  id="Ellipse-2-Copy"
                  fill="url(#gradient_rain)"
                />
              </g>
              <g id="Group-7" transform="translate(5.5 16)" stroke="none">
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  transform="translate(.5 .5)"
                  id="Ellipse-2-Copy-2"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z"
                  id="Ellipse-2-Copy"
                  fill="url(#gradient_rain)"
                />
              </g>
              <!--     <g id="Group-6-Copy" transform="translate(15.5 14.5)" stroke="none">
                     <path d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z" transform="translate(.5 .5)" id="Ellipse-2-Copy-2" fill="#000000" fill-opacity=".2"/>
                     <path d="M0 2.5c0-.177.03-.348.087-.506C.295 1.414 1.5 0 1.5 0s1.21 1.419 1.416 2.003A1.5 1.5 0 110 2.5z" id="Ellipse-2-Copy" fill="url(#gradient_rain)"/>
              </g>-->
            </g>
          </svg>
        </div>
      </div>
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_1">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".158" y1=".131" x2=".854" y2=".853" id="gradient_snow">
                <stop offset="0" stop-color="#E0F7FA" />
                <stop offset="1" stop-color="#00BCD4" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(10 6)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(4 5)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="Group-2" transform="translate(10.2 18)" stroke="none">
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-Copy-4"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  id="Vector-shape-Copy-3"
                  fill="url(#gradient_snow)"
                />
              </g>
              <g id="Group-3" transform="translate(15.2 15)" stroke="none">
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-Copy-5"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  id="Vector-shape-Copy-2"
                  fill="url(#gradient_snow)"
                />
              </g>
              <g id="Group" transform="translate(5.2 16)" stroke="none">
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-Copy-6"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  id="Vector-shape-Copy"
                  fill="url(#gradient_snow)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_1">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <linearGradient x1=".158" y1=".131" x2=".854" y2=".853" id="gradient_snow">
                <stop offset="0" stop-color="#E0F7FA" />
                <stop offset="1" stop-color="#00BCD4" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="cloud" transform="translate(10 6)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy" transform="translate(4 5)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_1)"
                />
              </g>
              <g id="Group-2" transform="translate(10.2 18)" stroke="none">
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-Copy-4"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  id="Vector-shape-Copy-3"
                  fill="url(#gradient_snow)"
                />
              </g>
              <!--     <g id="Group-3" transform="translate(15.2 15)" stroke="none">
                     <path d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z" transform="translate(.5 .5)" id="Vector-shape-Copy-5" fill="#000000" fill-opacity=".2"/>
                     <path d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z" id="Vector-shape-Copy-2" fill="url(#gradient_snow)"/>
              </g>-->
              <g id="Group" transform="translate(5.2 16)" stroke="none">
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-Copy-6"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.8 0h.002a.48.48 0 01.353.146A.48.48 0 012.3.5v.635l.55-.318a.48.48 0 01.378-.05.48.48 0 01.303.233l.001.002a.494.494 0 01-.036.553.494.494 0 01-.146.129L2.8 2l.55.317a.48.48 0 01.232.303.494.494 0 01-.548.626.494.494 0 01-.184-.062l-.55-.318v.635a.48.48 0 01-.147.353.48.48 0 01-.352.146H1.8a.48.48 0 01-.353-.146A.48.48 0 011.3 3.5v-.635l-.55.318a.494.494 0 01-.554-.037.494.494 0 01-.128-.146v-.002a.48.48 0 01-.05-.379.48.48 0 01.232-.303L.8 2l-.55-.317a.48.48 0 01-.233-.303.48.48 0 01.05-.38H.07A.48.48 0 01.372.766a.48.48 0 01.379.05l.55.317V.499a.48.48 0 01.146-.353A.48.48 0 011.8 0z"
                  id="Vector-shape-Copy"
                  fill="url(#gradient_snow)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="listItem">
        <div class="ico">
          <svg class="weatherIcon"
            :style="{fontSize: fSize}"
            viewBox="0 0 24 24"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1=".158" y1=".131" x2=".854" y2=".853" id="gradient_snow">
                <stop offset="0" stop-color="#E0F7FA" />
                <stop offset="1" stop-color="#00BCD4" />
              </linearGradient>
              <linearGradient x1=".304" y1=".153" x2=".903" y2=".879" id="gradient_cloud">
                <stop offset="0" stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#263238" />
              </linearGradient>
              <clipPath id="clip_1">
                <use xlink:href="#artboard_1" clip-rule="evenodd" />
              </clipPath>
              <path id="artboard_1" d="M0 0h24v24H0z" />
            </defs>
            <g id="icons" clip-path="url(#clip_1)">
              <use xlink:href="#artboard_1" fill="#FFFFFF" fill-opacity="0" />
              <g id="Group-9" transform="translate(5 14.5)" stroke="none">
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-8"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  id="Vector-shape-6"
                  fill="url(#gradient_snow)"
                />
              </g>
              <g id="Group-10" transform="translate(10 18)" stroke="none">
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-8"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  id="Vector-shape-6"
                  fill="url(#gradient_snow)"
                />
              </g>
              <g id="Group-11" transform="translate(16 15.5)" stroke="none">
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-8"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  id="Vector-shape-6"
                  fill="url(#gradient_snow)"
                />
              </g>
              <g id="cloud" transform="translate(10 6)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="Group-9" transform="translate(-6 27)" stroke="none">
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  transform="translate(.5 .5)"
                  id="Vector-shape-8"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M.75 0H3v2.25L2.25 3H0V.75L.75 0z"
                  id="Vector-shape-6"
                  fill="url(#gradient_snow)"
                />
              </g>
              <path
                d="M1 0h3v3L3 4H0V1l1-1z"
                transform="translate(-6 27)"
                id="Vector-shape-7"
                fill="#000000"
                fill-opacity="0.2"
                stroke="none"
              />
              <path
                d="M1 0h3v3L3 4H0V1l1-1z"
                transform="translate(-6 27)"
                id="Vector-shape-6"
                fill="#D3D3D3"
                stroke="none"
              />
              <g id="cloud-Copy" transform="translate(4 5)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
              <g id="cloud-Copy-2" transform="translate(7 8)" stroke="none">
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  transform="translate(.5 .5)"
                  id="cloud_shadow"
                  fill="#000000"
                  fill-opacity="0.2"
                />
                <path
                  d="M2.5 8H6a4 4 0 10-3.881-4.971A2.5 2.5 0 002.5 8z"
                  id="cloud"
                  fill="url(#gradient_cloud)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang='scss'>
@import "../scss/imports";

#icons {
  position: relative;
}

select {
  position: sticky;
  top: 0rem;
  width: 100%;
  padding: 1rem 2rem;
  height: 4rem;
  // right: 2rem;

  font-size: var(--h4);
  border-radius: 0;
  background: $backgroundColor;
}

svg.weatherIcon {
  height: 2em;
  width: 2em;
  font-size: 2rem;
}

.list {
  display: flex;
  flex-flow: row wrap;
  gap: 1em 2em;
  justify-content: center;

  max-width: 500px;
  margin: 4rem auto;
}


</style>
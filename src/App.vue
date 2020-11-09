<template>
  <div id="app">
    <div class="container mx-auto my-5">
      <!-- component -->
      <div class="w-full">
        <div class="h-2 bg-red-light"></div>
        <div class="flex items-center justify-center h-screen bg-red-lightest">
          <div
            class="bg-white shadow-lg rounded-lg"
            style="width: 45rem !important;"
          >
            <div class="flex">
              <div>
                <img
                  class="w-full rounded hidden md:block"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Album Pic"
                />
              </div>
              <div class="w-full p-8">
                <div class="flex justify-between">
                  <div>
                    <h3 class="text-2xl text-grey-darkest font-medium">
                      A Sky Full of Stars
                    </h3>
                    <p class="text-sm text-grey mt-1">Ghost Stories</p>
                  </div>
                  <div class="text-red-lighter">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-8">
                  <div class="text-grey-darker">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"
                      />
                    </svg>
                  </div>
                  <div class="text-grey-darker">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                    </svg>
                  </div>
                  <button
                    class="text-white p-8 rounded-full bg-red-700 shadow-lg focus:outline-none"
                    @click="toggleSong"
                  >
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                    </svg>
                  </button>
                  <div class="text-grey-darker">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                    </svg>
                  </div>
                  <div class="text-grey-darker">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="mx-5 py-4 w-8/12">
                <div class="flex justify-between text-sm text-grey-darker mb-1">
                  <p>{{ timer }}</p>
                  <p>{{ duration }}</p>
                </div>
                <div
                  ref="progress-content"
                  class="py-2 group"
                  @click="moveTo"
                  @mousedown="startDragging"
                >
                  <div class="h-2 bg-gray-500 rounded-full relative">
                    <div
                      :class="[
                        'h-2 bg-black group-hover:bg-red-700 rounded-full',
                        { 'bg-red-700': isDragging }
                      ]"
                      :style="{ width: `${progress}%` }"
                    ></div>
                    <button
                      :class="[
                        '-translate-x-1/2 -translate-y-1/2 absolute bg-red-700 focus:outline-none focus:block group-hover:block h-4 left-0 rounded-full shadow top-1/2 transform w-4',
                        isDragging ? 'block' : 'hidden'
                      ]"
                      :style="{ left: `${progress}%` }"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="mx-5 flex-1">
                <div class="text-sm text-grey-darker mb-1">
                  <p>Volume</p>
                </div>
                <div
                  ref="volume-content"
                  class="py-2 group"
                  @click="moveVolume"
                  @mousedown="startDraggingVolume"
                >
                  <div class="h-2 bg-gray-500 rounded-full relative">
                    <div
                      :class="[
                        'h-2 bg-black group-hover:bg-red-700 rounded-full',
                        { 'bg-red-700': isDraggingVolume }
                      ]"
                      :style="{ width: `${volume * 100}%` }"
                    ></div>
                    <button
                      :class="[
                        '-translate-x-1/2 -translate-y-1/2 absolute bg-red-700 focus:outline-none focus:block group-hover:block h-4 left-0 rounded-full shadow top-1/2 transform w-4',
                        isDraggingVolume ? 'block' : 'hidden'
                      ]"
                      :style="{ left: `${volume * 100}%` }"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script>
import { Howl } from "howler";

export default {
  name: "App",
  data() {
    return {
      sound: null,
      timer: "0:00",
      progress: 0,
      isDragging: false,
      volume: 1,
      isDraggingVolume: false
    };
  },
  computed: {
    duration() {
      if (!this.sound) {
        return "0:00";
      }

      return this.formatTime(Math.round(this.sound.duration()));
    }
  },
  created() {
    this.setMediaSession();

    this.sound = new Howl({
      src: ["/mp3/yann_tiersen.mp3"],
      html5: true,
      onplay: () => {
        requestAnimationFrame(this.step);
      },
      volume: this.volume
    });
  },
  methods: {
    setMediaSession() {
      if ("mediaSession" in navigator) {
        // eslint-disable-next-line no-undef
        navigator.mediaSession.metadata = new MediaMetadata({
          title: "Comptine d'un autre été, l'après-midi",
          artist: "Yann Tiersen",
          album: "Amelie from Montmartre (Original SoundTrack)",
          artwork: [
            {
              src:
                "https://e-cdns-images.dzcdn.net/images/cover/5cebbe7de2511f54bc24e73becbb3f71/264x264-000000-80-0-0.jpg",
              sizes: "96x96",
              type: "image/png"
            },
            {
              src:
                "https://e-cdns-images.dzcdn.net/images/cover/5cebbe7de2511f54bc24e73becbb3f71/264x264-000000-80-0-0.jpg",
              sizes: "128x128",
              type: "image/png"
            },
            {
              src:
                "https://e-cdns-images.dzcdn.net/images/cover/5cebbe7de2511f54bc24e73becbb3f71/264x264-000000-80-0-0.jpg",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src:
                "https://e-cdns-images.dzcdn.net/images/cover/5cebbe7de2511f54bc24e73becbb3f71/264x264-000000-80-0-0.jpg",
              sizes: "256x256",
              type: "image/png"
            },
            {
              src:
                "https://e-cdns-images.dzcdn.net/images/cover/5cebbe7de2511f54bc24e73becbb3f71/264x264-000000-80-0-0.jpg",
              sizes: "384x384",
              type: "image/png"
            },
            {
              src:
                "https://e-cdns-images.dzcdn.net/images/cover/5cebbe7de2511f54bc24e73becbb3f71/264x264-000000-80-0-0.jpg",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        });
      }
    },
    toggleSong() {
      if (!this.sound.playing()) {
        this.sound.play();
        return;
      }

      this.sound.pause();
    },
    formatTime(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = secs - minutes * 60 || 0;

      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    step() {
      let seek = this.sound.seek() || 0;

      if (!this.isDragging) {
        this.updateTimerProgress(seek);
      }

      // If the sound is still playing, continue stepping.
      if (this.sound.playing()) {
        requestAnimationFrame(this.step);
      }
    },
    updateTimerProgress(percent) {
      this.timer = this.formatTime(Math.round(percent));
      this.progress = (percent / this.sound.duration()) * 100 || 0;
    },
    moveTo(event, el = null) {
      // progress bar point half width
      let element = event.currentTarget;

      if (el) {
        element = el;
      }

      const mouseXPosition = event.pageX;
      const progressDOMPosition = element.getBoundingClientRect().left;
      const progressWidth = element.offsetWidth;

      const percent = (mouseXPosition - progressDOMPosition) / progressWidth;
      const newDuration = this.sound.duration() * percent;

      if (newDuration < 0 || newDuration > this.sound.duration()) {
        return;
      }

      if (!this.isDragging) {
        this.sound.seek(newDuration);
      } else {
        window.requestAnimationFrame(() =>
          this.updateTimerProgress(newDuration)
        );
      }

      if (!this.sound.playing()) {
        this.step();
      }
    },
    moveVolume(event, el = null) {
      let element = event.currentTarget;

      if (el) {
        element = el;
      }

      const mouseXPosition = event.pageX;
      const progressDOMPosition = element.getBoundingClientRect().left;
      const volumeWidth = element.offsetWidth;

      const level = (mouseXPosition - progressDOMPosition) / volumeWidth;
      console.log(level);
      if (level < 0 || level > 1) {
        return;
      }

      this.volume = level;
      this.sound.volume(level);
    },
    startDragging(event) {
      this.isDragging = true;

      this.moveTo(event);

      document.querySelector("body").classList.add("select-none");

      window.addEventListener("mousemove", this.draggPointer, true);
      window.addEventListener("mouseup", this.stopDragging, true);
    },
    draggPointer(event) {
      this.moveTo(event, this.$refs["progress-content"]);
    },
    stopDragging() {
      this.isDragging = false;
      this.moveTo(event, this.$refs["progress-content"]);

      document.querySelector("body").classList.remove("select-none");

      window.removeEventListener("mousemove", this.draggPointer, true);
      window.removeEventListener("mouseup", this.stopDragging, true);
    },
    startDraggingVolume(event) {
      this.isDraggingVolume = true;

      this.moveVolume(event);

      document.querySelector("body").classList.add("select-none");

      window.addEventListener("mousemove", this.dragPointerVolume, true);
      window.addEventListener("mouseup", this.stopDraggingVolume, true);
    },
    dragPointerVolume(event) {
      this.moveVolume(event, this.$refs["volume-content"]);
    },
    stopDraggingVolume() {
      this.isDraggingVolume = false;
      this.moveVolume(event, this.$refs["volume-content"]);

      document.querySelector("body").classList.remove("select-none");

      window.removeEventListener("mousemove", this.dragPointerVolume, true);
      window.removeEventListener("mouseup", this.stopDraggingVolume, true);
    }
  }
};
</script>

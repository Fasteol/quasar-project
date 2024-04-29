<template>
  <div class="text-center text-h6 text-bold q-mt-md">Edit Section Hero</div>
  <div class="text-center q-mt-sm">Ubah dan alur konten web Keraton</div>

  <div style="padding-inline: 300px; margin-top: 120px">
    <div
      v-for="(item, i) in textInputs"
      :key="i"
      class="flex full-width"
      style="gap: 5px"
    >
      <div class="col-grow">
        <q-input
          filled
          v-model="item.data"
          label="Title"
          color="black"
          bg-color="gray"
        />
      </div>
      <q-input
        filled
        v-model="item.textSize"
        label="Size"
        color="black"
        bg-color="gray"
      />
    </div>

    <div
      v-for="(link, i) in linkInputs"
      :key="i"
      class="flex full-width q-mt-md"
      style="gap: 5px"
    >
      <div class="col-grow">
        <q-input
          filled
          v-model="link.data"
          label="Sub Title"
          color="black"
          bg-color="gray"
        />
      </div>
    </div>
    <q-file
      v-for="(image, i) in imageInputs"
      :key="i"
      filled
      type="file"
      v-model="image.data"
      label="Tambahkan File"
      color="black"
      class="q-mt-md"
    />
    <q-btn
      no-caps
      @click="sendUpdate"
      style="background: #123b32"
      text-color="white"
      label="Save and Update"
      class="full-width q-mt-md"
    />
  </div>
</template>

<script>
import socket from "src/socket";
import { ref } from "vue";
export default {
  setup() {
    return {
      textInputs: ref([]),
      imageInputs: ref([]),
      linkInputs: ref([]),
      dynamicTitle: ref(["title1", "title2"]),
    };
  },
  data() {
    return {
      contentId: this.$route.params.id,
    };
  },
  mounted() {
    this.fetchData();
    socket.connect();
  },
  beforeUnmount() {
    socket.disconnect();
  },
  methods: {
    async fetchData() {
      try {
        if (!this.contentId) throw Error("Content Id isnt defined");
        const response = await this.$api.get(`/content/${this.contentId}`);
        if (response.status != 200) throw Error("Error occured");
        const contextKeys = Object.keys(response.data.data.context);
        let rawContext = { xs: [], xi: [], xl: [] };
        for (let context of contextKeys)
          rawContext[this.takeTwoChars(context)].push({
            ...response.data.data.context[context],
          });
        this.textInputs = rawContext.xs;
        this.imageInputs = rawContext.xi;
        this.linkInputs = rawContext.xl;
      } catch (err) {
        console.log(err);
      }
    },
    async sendUpdate() {
      try {
        let textList = [],
          imageList = [],
          linkList = [];
        for (let text of this.textInputs) textList.push(text);
        for (let image of this.imageInputs) imageList.push(image.data);
        for (let link of this.linkInputs) linkList.push(link.data);
        const response = await this.$api.post(
          `/content/edit/${this.contentId}`,
          { textList, imageList, linkList },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status != 200) throw Error("Error occured");
        console.log("nkdkasdnkadnkdalknasdl");
        socket.emit("dashboard", {});
      } catch (err) {
        console.log(err);
      }
    },
    takeTwoChars(str) {
      return str.slice(0, 2);
    },
  },
};
</script>

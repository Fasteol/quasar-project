<template>
  <div class="text-center text-h6 text-bold q-mt-md">Edit Section Hero</div>
  <div class="text-center q-mt-sm">Ubah dan alur konten web Keraton</div>

  <div style="padding-inline: 300px; margin-top: 120px">
    <div class="flex full-width" style="gap: 5px">
      <div class="col-grow">
        <q-input
          filled
          v-model="title"
          label="Title"
          color="black"
          bg-color="gray"
        />
      </div>
      <q-input
        filled
        v-model="sizeTitle"
        label="Size"
        color="black"
        bg-color="gray"
      />
    </div>

    <div class="flex full-width q-mt-md" style="gap: 5px">
      <div class="col-grow">
        <q-input
          filled
          v-model="subTitle"
          label="Sub Title"
          color="black"
          bg-color="gray"
        />
      </div>
      <q-input
        filled
        v-model="subTitleSize"
        label="Size"
        color="black"
        bg-color="gray"
      />
    </div>
    <q-file
      filled
      v-model="uploadFile"
      label="Tambahkan File"
      color="black"
      class="q-mt-md"
    />
    <q-btn
      no-caps
      style="background: #123b32"
      text-color="white"
      label="Save and Update"
      class="full-width q-mt-md"
    />
  </div>
</template>

<script>
import ref from "vue";
export default {
  setup() {
    return {
      title: ref(),
      sizeTitle: ref(),
      subTitle: ref(),
      subTitleSize: ref(),
      uploadFile: ref(),
    };
  },
};
</script>

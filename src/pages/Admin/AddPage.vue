<template>
  <div class="text-center text-h6 text-bold q-mt-md">Edit Section Hero</div>
  <div class="text-center q-mt-sm">Ubah dan alur konten web Keraton</div>

  <div style="padding-inline: 300px">
    <div class="flex full-width" style="gap: 5px">
      <div class="col-grow">
        <q-input
          filled
          v-model="text"
          label="Title"
          color="black"
          bg-color="gray"
        />
      </div>
      <q-input
        filled
        v-model="text"
        label="Size"
        color="black"
        bg-color="gray"
      />
    </div>

    <div class="flex full-width" style="gap: 5px">
      <div class="col-grow">
        <q-input
          filled
          v-model="text"
          label="Title"
          color="black"
          bg-color="gray"
        />
      </div>
      <q-input
        filled
        v-model="text"
        label="Size"
        color="black"
        bg-color="gray"
      />
    </div>
    <q-file filled v-model="model" label="Filled" color="black" />
    <q-btn
      color="white"
      text-color="black"
      label="Standard"
      class="full-width"
    />
  </div>
</template>

<script>
export default {};
</script>

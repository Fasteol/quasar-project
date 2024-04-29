<template>
  <div>hallo</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      textInputs: ref([]),
      imageInputs: ref([]),
      linkInputs: ref([]),
    };
  },
  data(){
    return{
      contentId: this.$route.params.id
    }
  },
  mounted(){
    this.fetchData()
  },
  methods:{
    async fetchData(){
      try{
        if(!this.contentId) throw Error('Content Id isnt defined')
        const response = await this.$api.get(`/content/${this.contentId}`)
        if(response.status != 200) throw Error('Error occured')
        const contextKeys = Object.keys(response.data.data.context)
        let rawContext = { xs: [], xi: [], xl: [] }
        for(let context of contextKeys) rawContext[this.takeTwoChars(context)].push({
          data: response.data.data.context[context]
        })
        this.textInputs = rawContext.xs
        this.imageInputs = rawContext.xi
        this.linkInputs = rawContext.xl

        console.log(this.textInputs, this.imageInputs, this.linkInputs)
      }catch(err){
        console.log(err)
      }
    },
    async sendUpdate(){
      try{
        const response = this.api.post(`content/edit/${this.contentId}`)
        if(response.status != 200) throw Error('Error occured')
        const data = {
          sectionName: this['SECTION_NAME_MODEL'],
          
        }
      }catch(err){
        console.log(err)
      }
    },
    takeTwoChars(str) {
        return str.slice(0, 2);
    }
  }
 };
</script>

<style></style>

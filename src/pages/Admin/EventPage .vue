<template>
 
</template>

<script>
import socket from "src/socket";
import { ref } from "vue";
export default {
  setup() {
    return {
      sectionName: ref(),
      textInputs: ref([]),
      imageInputs: ref([]),
      linkInputs: ref([]),
      dynamicTitle: ref(['title1', 'title2'])
    };
  },
  data(){
    return{
      contentId: this.$route.params.id
    }
  },
  mounted(){
    this.fetchData()
    socket.connect()
  },
  beforeUnmount() {
    socket.disconnect()
  },
  methods:{
    async fetchData(){
      try{
        if(!this.contentId) return this.setUpDefault()
        const response = await this.$api.get(`/content/${this.contentId}`)
        if(response.status != 200) throw Error('Error occured')
        this.sectionName = response.data.data.sectionName
        this.sectionOrder = response.data.data.sectionOrder

        const contextKeys = Object.keys(response.data.data.context)
        let rawContext = { xs: [], xi: [], xl: [] }
        for(let context of contextKeys) rawContext[this.takeTwoChars(context)].push({
          ...response.data.data.context[context]
        })
        this.textInputs = rawContext.xs
        this.imageInputs = rawContext.xi
        this.linkInputs = rawContext.xl
      }catch(err){
        console.log(err)
      }
    },
    async sendUpdate(){
      try{
        let textList = [], imageList = [], linkList = []
        for(let text of this.textInputs) textList.push(text)
        for(let image of this.imageInputs) imageList.push(image.data)
        for(let link of this.linkInputs) linkList.push(link.data)
        const linkIdentifier = this.contentId ?  `edit/${this.contentId}` : 'create/'
        const response = await this.$api.post(`/content/${linkIdentifier}`, { pageId: 1, sectionName: this.sectionName, sectionOrder: this.sectionOrder, textList, imageList, linkList }, {
        headers: {
                  'Content-Type': 'multipart/form-data'
                }
        })
        if(response.status != 200) throw Error('Error occured')
        socket.emit('dashboard', { })
      }catch(err){
        console.log(err)
      }
    },
    setUpDefault(){
      this.sectionName = ""
      this.sectionOrder = 0
      this.addNewInput('text')
      this.addNewInput('image')
      this.addNewInput('link')
    },
    addNewInput(type){
      switch(type){
        case "text":
          this.textInputs.push({
            data: "",
            textSize: ""
          }) 
          break;
        case "image":
          this.imageInputs.push({
            data: ""
          })
          break;
        case "link":
          this.linkInputs.push({
            data: ""
          })
          break;
        default:
          break;
      }
    },
    takeTwoChars(str) {
        return str.slice(0, 2);
    }
  }
 };
</script>

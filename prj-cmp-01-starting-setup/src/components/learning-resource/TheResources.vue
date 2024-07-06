<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resources')">Add Resources</base-button>
  </base-card>
  <components :is="setSelectedTab"></components>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
  components:{
    StoredResources,
    AddResource
  },
  data(){
    return{
      selectedTab: 'stored-resources',
      storedResources:[
        {
          id: 'official-guide', 
          title: 'Officaial Guide', 
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google', 
          title: 'Google', 
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  provide(){
    return{
      resources: this.storedResources
    }
  },
  methods: {
    setSelectedTab(tab){
      this.selectedTab = tab
    }
  }
}
</script>
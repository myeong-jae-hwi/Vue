<template>
  <li>
    <h2>{{ name }} {{isFavorite ? 'aa':'bb' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Change</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
      <li>
        <strong>aa:</strong>
        {{ isFavorite }}
      </li>
    </ul>
    <button @click="deleteFriend()">삭제</button>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name', 
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  props:{
    id:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: String,
      required: false,
      default: '0'
    },
  },
  emits:['change-favorite'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      console.log(this.isFavorite);
    },
    toggleFavorite(){
     this.$emit('change-favorite', this.id);
    },
    deleteFriend(){
      this.$emit('del',this.id);
    }
  }
};
</script>
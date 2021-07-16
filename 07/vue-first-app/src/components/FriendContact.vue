<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detialsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  data() {
    return {
      detialsAreVisible: false,
      friend: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "32133 3211 133",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detialsAreVisible = !this.detialsAreVisible;
    },
  },
};
</script>
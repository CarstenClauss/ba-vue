<template>
  <div class="FormWrapper">
    <div class="title">Enter a number.</div>
    <div class="FormButtons">
      <input
        v-model="count"
        class="StyledInput"
        type="number"
        placeholder="number"
      />
      <button class="StyledButton" type="button" @click="onAddClick">
        Add Components
      </button>
      <button
        class="StyledButton"
        type="button"
        @click="handleRemoveComponents"
      >
        Remove Components
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    onAddClick() {
      this.$emit('clicked', this.count)
    },
    handleRemoveComponents() {
      this.count = 0
    },
  },
}
</script>

<style>
.FormWrapper {
  padding: 1em 0 1em;
}

.FormButtons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}

.StyledButton {
  font-size: 0.9em;
  border: white solid 1px;
  background-color: transparent;
  color: white;
  padding: 0.5em;
  margin: 1em 2em 0 0;
}

.StyledInput {
  font-size: 0.9em;
  border: white solid 1px;
  padding: 0.5em;
  margin: 1em 2em 0 0;
}
</style>

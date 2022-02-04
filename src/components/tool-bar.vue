<template>
  <div class="toolBar-container">
    <input
      placeholder="Search in titles..."
      v-model.trim="input"
      v-on:input="search()"
      class="toolBar-search-input"
    />
    <label for="sorting"> Sort: </label>
    <select
      id="sorting"
      v-model="isSorted"
      @change="sorted($event)"
      name="sort"
    >
      <option selected>Sort</option>
      <option value="value">ascending</option>
      <option value="dsc">descending</option>
    </select>
  </div>
</template>

<script src="../js-files/Tool-bar.js" />

<style src="../scss-files/_tool-bar.scss" lang="scss" scoped />

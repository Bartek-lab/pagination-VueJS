<template>
  <ul class="pagination-list">
    <li class="pagination-list-item">
      <a
        @click.prevent="onClickFirstPage"
        :class="isInFirstPage ? 'disabled' : ''"
        :disabled="isInFirstPage"
      >
        First
      </a>
    </li>
    <li class="pagination-list-item">
      <a
        @click.prevent="onClickPreviousPage"
        :class="isInFirstPage ? 'disabled' : ''"
        :disabled="isInFirstPage"
        >«</a
      >
    </li>
    <li
      v-for="(page, index) in pages"
      :key="index"
      class="pagination-list-item"
    >
      <a
        @click.prevent="onClickPage(page.number)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.number) }"
        >{{ page.number }}</a
      >
    </li>
    <li class="pagination-list-item">
      <a
        @click.prevent="onClickNextPage"
        :class="isInLastPage ? 'disabled' : ''"
        :disabled="isInLastPage"
        >»</a
      >
    </li>
    <li class="pagination-list-item">
      <a
        @click.prevent="onClickLastPage"
        :class="isInLastPage ? 'disabled' : ''"
        :disabled="isInLastPage"
        >Last</a
      >
    </li>
  </ul>
</template>

<script src="../js-files/Pagination-container.js"></script>
<style src="../scss-files/_pagination-container.scss" lang="scss" scoped />

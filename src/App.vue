<template>
  <div id="appBox">
    <headerContainer />
    <toolBar></toolBar>

    <postsSection
      :data="posts"
      :per-page="10"
      :currentPage="currentPage"
    ></postsSection>
    <paginationContainer
      :data="posts"
      :totalPages="posts.length / 10"
      :total="posts.length"
      :per-page="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    ></paginationContainer>

    <footerContainer />
  </div>
</template>

<script src="./js-files/App.js"></script>

<style src="./scss-files/_app.scss" lang="scss"></style>

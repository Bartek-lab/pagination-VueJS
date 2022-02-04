<template>
  <div class="postsContainer">
    <div
      v-for="(post, index) in paginated"
      :key="index"
      class="postsContainer-post"
    >
      <div class="postContainer-post-top-box">
        <h4 class="postsContainer-post-title">{{ post.title }}</h4>
        <button @click="onDeletePost(post)" class="postsContainer-post-delete">
          X
        </button>

        <span>Post id: {{ post.id }}</span>
        <span>User id: {{ post.userId }}</span>

        <div>
          <article v-if="!readMore[post.id]" class="postContainer-post-article">
            {{ post.body.slice(0, 50) }}...
          </article>
          <article v-if="readMore[post.id]" class="postContainer-post-article">
            {{ post.body }}
          </article>
          <button
            v-if="!readMore[post.id]"
            @click="readMoreHandler(post.id)"
            class="postsContainer-post-read"
          >
            Read more
          </button>
          <button
            v-else
            @click="readMoreHandler(post.id)"
            class="postsContainer-post-read"
          >
            Read less
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../js-files/Posts-section.js"></script>
<style src="../scss-files/_posts-section.scss" lang="scss" scoped />

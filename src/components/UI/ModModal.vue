<template>
  <div class="modal" v-if="show"  @click="hideModal">
    <div class="modal__content" @click.stop >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: "mod-modal",
  mixins: [toggleMixin]
};
</script>

<style lang="css">
.modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  min-width: 300px;
}
</style>
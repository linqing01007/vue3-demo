<template>
  <div class="tree">
    <tree-node
      :h="0"
      :treeHeight="treeHeight"
      :value="root.val"
      :pos="500"
      :node="root"
      :parent="null"
    ></tree-node>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { createTree, getHeight } from './TreeNode'
import TreeNode from './TreeNode.vue'
export default defineComponent({
  name: 'tree',
  components: {
    TreeNode
  },
  setup () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const root = createTree(arr)
    const treeHeight = getHeight(root)
    // const treeWidth = getWidth(root)
    console.log('111111', root.val, treeHeight)
    return {
      root,
      treeHeight
      // treeWidth
    }
  }
})
</script>
<style>
.tree {
  position: relative;
}
</style>

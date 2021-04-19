<template>
  <div class="tree-node" :style="styleObj">
    {{ value }}
  </div>
  <tree-node
    v-if="leftChild"
    :h="h+1"
    :treeHeight="treeHeight"
    :value="leftChild.val"
    :pos="leftChildPos"
    :node="leftChild"
    :parent="node"
    >
  </tree-node>
  <tree-node
    v-if="rightChild"
    :h="h+1"
    :treeHeight="treeHeight"
    :value="rightChild.val"
    :pos="rightChildPos"
    :node="rightChild"
    :parent="node"
  >
  </tree-node>
</template>
<script lang="ts">
import { TreeNode } from './TreeNode'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'treeNode',
  props: {
    h: {
      type: Number,
      required: true
    }, // 当前节点所处的高度
    treeHeight: {
      type: Number,
      required: true
    }, // 整颗树的高度
    // i: Number, // 当前节点在该层中处于第几个（左到右）
    value: {
      // 当前节点的值
      required: true
    },
    pos: {
      type: Number,
      required: true
    }, // 当前点的left值
    parent: TreeNode,
    node: TreeNode
    // leftChild: TreeNode,
    // rightChild: TreeNode
  },
  setup (props, context) {
    const styleObj = reactive({
      position: 'absolute',
      top: `${(props.h || 0) * 100 + 50}px`,
      left: `${props.pos || 0}px`
    })
    console.log('222222', props.node?.val, props.node?.left?.val, props.node?.right?.val)
    const leftChild = props.node?.left
    const rightChild = props.node?.right

    const leftChildPos = props.pos - (props.treeHeight - props.h + 1) * 50 + 25
    const rightChildPos = props.pos + (props.treeHeight - props.h + 1) * 50 - 25
    return {
      styleObj,
      leftChild,
      rightChild,
      leftChildPos,
      rightChildPos
    }
  }
})
</script>
<style>
.tree-node {
  border: 1px solid #000;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>

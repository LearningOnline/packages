<template>
    <div class="list-group-item">{{name}}</div>
</template>



<script>
    export default {
        name: 'NoteItem',
        props: ['name']  // 在子组件声明 我需要被传入的参数
    }
</script>


<style>

</style>
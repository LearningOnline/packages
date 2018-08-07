<template>
    <div>
        <div class="list-group">
            <NoteItem 
                v-for="(note, index) in NoteList"
                v-bind:name='note'
                v-bind:key="index"
            ></NoteItem>
        </div>
    </div>
</template>



<script>
import NoteItem from '@/components/NoteItem.vue'
    export default {
        name: 'NoteList',
        components: {
            NoteItem
        },
        data:function(){
            return {
                NoteList: [
                    '吃饭',
                    '睡觉',
                    '打豆豆'
                ]
            }
        }
    }
</script>


<style>

</style>

<template>
    <div class="row">
        <!-- 左边的 textarea 区域开始 -->
        <div class="col-md-6 height600">
            <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">标题</span>
                <input type="text" class="form-control" placeholder="请输入标题" aria-describedby="basic-addon1">
            </div>

            <!-- textarea -->
            <textarea
                class="my-textarea"
                v-model="content"
            >

            </textarea>

        </div>
        <!-- 左边的 textarea 区域结束 -->

        <!-- 右边的 展示区 区域开始 -->
        <div class="col-md-6 height600">
            <div>
                <button class="btn btn-success">添加</button>
            </div>
            <div class="right-box my-textarea"
                v-html="markedDownContent"
                >
            </div>
        </div>
        <!-- 右变的 展示 区域结束 -->
    </div>
</template>


<script>
    import marked from 'marked'
    export default {
        name: 'Zsq',
        data:function(){
            return {
                content: ''
            }
        },
        computed:{
            markedDownContent:function(){
                return marked(this.content)
            }
        }
    }
</script>


<style>
.my-textarea {
    margin-top: 15px;
    height: 80%;
    width: 100%
}

.height600 {
    height: 600px;
}

.right-box {
    border: 1px solid grey
}
</style>

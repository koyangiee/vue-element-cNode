<template>
    <el-main>
        <div class="content">
            <h1>{{ content.title }}</h1>
            <div class="author">发布于 {{ content.create_at | formatDate }} · 作者：<router-link :to="{path: `/user/${content.author.loginname}`}">{{ content.author.loginname }}</router-link> · {{ content.visit_count }}次浏览</div>
            <div class="text" v-html="content.content">
            </div>
        </div>
    </el-main>
</template>

<script>
export default {
    name: "Content",
    data(){
        return {
            content: ''
        }
    },
    methods: {
        getContent(topic_id){
            this.$http.get(`/topic/${topic_id}`).then((response) => {
                this.content = response.data.data
                console.log(response.data.data)
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        this.getContent(this.$route.params.id)
    },
    beforeRouteUpdate(to, form, next){
        this.getContent(to.params.id)
        next()
    }
}
</script>

<style lang="less">
    .content{
        width: 1200px;
        margin: 0 auto;
        box-shadow: 0 0 10px #ccc;
        padding: 50px;
        box-sizing: border-box;

        h1{
            margin-bottom: 20px;
        }

        .author{
            color: #555;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 20px;

            a{
                color: #80bd01;
                text-decoration: none;
            }
        }
        .text{
            line-height: 28px;

            img{
                display: block;
                margin: 0 auto;
                max-width: 100%
            }
        }
    }
</style>
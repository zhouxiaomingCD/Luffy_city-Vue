<template>
  <div class="wrap">
    {{$route.params}}
  </div>
</template>

<script>
    export default {
        name: "Buy",
        methods: {

            GetConfirmInfo() {
                let params = this.$route.params;
                console.log(1);
                this.$http.post({
                    url: '"/order/confirm/"',
                    data: params
                }).then((res)=>{
                    console.log(res)
                })
            },
        },
        created() {
            this.GetConfirmInfo()
        }
    }
</script>

<style scoped>

</style>

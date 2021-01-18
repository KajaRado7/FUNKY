<template>
    <div id="single-regija">
        <h1></h1>
        <article><article>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            regije: {

            } 
        }
    },
    created() {
        this.$http.get('@/views/Regije' + this.id).then(function(data){
            console.log(data);
            this.regije = data.body;
        })
    }
}
</script>
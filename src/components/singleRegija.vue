<template>
<div class="container" style="max-width: 500px;">
    <div id="single-regija">
        <h1></h1>
        <article><article>
    </div>
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
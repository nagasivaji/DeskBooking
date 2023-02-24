<template>
    <div>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
            </button>
            <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/">Book desk using map</router-link></li>
                <li><router-link class="dropdown-item" to="/">Book for Multiple Days</router-link></li>
                <li><router-link class="dropdown-item" to="/showMap">Map</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
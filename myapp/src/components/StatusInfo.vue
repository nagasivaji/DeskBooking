<template>
    <div>
        <p>
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <span v-if="this.bookingStatus" class="text-success fs-4">Your Desk booking confirmed <i class="bi bi-check-circle-fill"></i></span>
                <span v-else class="text-danger fs-4">No desk Booked for you <i class="bi bi-slash-circle-fill"></i></span>
            </button>
        </p>
        <div class="collapse" id="collapseExample" v-if="this.bookingStatus">
            <div class="card card-body">
                11th floor Blue Wing C-102
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['bookingStatus'],
    created() {
        console.log(this.bookingStatus)
    },
}
</script>

<style>

</style>
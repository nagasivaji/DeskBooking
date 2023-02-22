<template>
    <div class="home">
        <div class="_navBar">
            <NavBar />
        </div>
        <div class="_mainArea">
            <div class="_logoImg">
                <img src="../assets/Images/DeskLogo.png" alt="">
            </div>
            <div class="_actionsArea">
                <div>
                    <StatusInfoVue :bookingStatus="bookingStatus" />
                </div>
                <div>
                    <button @click="onClickOneTapBtn" :class="[bookingStatus ? 'btn btn-danger' : 'btn btn-success']">
                        <span v-if="bookingStatus">Cancle Desk</span>
                        <span v-else>Book Desk</span>
                    </button>
                </div>
                <div>
                    <MoreActionBtns />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StatusInfoVue from '../components/StatusInfo.vue'
import NavBar from './../components/NavBar.vue'
import MoreActionBtns from '../components/MoreActionBtns.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    StatusInfoVue,
    MoreActionBtns
  },
  data() {
    return {
        bookingStatus: false
    }
  },
  methods: {
    onClickOneTapBtn () {
        this.bookingStatus = !this.bookingStatus
    }
  },
}
</script>

<style  scoped>
    ._mainArea{
      display: flex;
    }

    .home ._mainArea ._actionsArea{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>


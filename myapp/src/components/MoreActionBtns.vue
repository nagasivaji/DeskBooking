<template>
    <div class="_More">
        <!-- title -->
        <div class="_title">
            <p class="fs-1">Desk booking</p>
        </div>
        <!-- options -->
        <div class="_options">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked @click="onClickOption" value="singleDay">
                <label class="form-check-label" for="flexRadioDefault1">Book Desk</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" @click="onClickOption" value="multipleDays">
                <label class="form-check-label" for="flexRadioDefault2">Book for multiple days</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" @click="onClickOption" value="teamBooking">
                <label class="form-check-label" for="flexRadioDefault2">Book for team</label>
            </div>
        </div>
        <!-- SinleDay -->
        <div class="_singleDayDiv" v-if="option === 'singleDay'">
            <div class="_mapDiv">
                <Map :pathArray='pathArray' :sendData="getData" :bookingCount="bookingCount" :myDesk="''"/>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" @click="onClickSingleDay">Book</button>
            </div>
        </div>

        <!-- Multiple Day -->
        <div class="_multipleDayDiv" v-if="option === 'multipleDays'">
            <div class="_form">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="">Start Date</span>
                    <input type="date" class="form-control" placeholder="Select Start Date" aria-label="startDate" aria-describedby="basic-addon1" v-model="startDate">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="">End Date</span>
                    <input type="date" class="form-control" placeholder="Select End Date" aria-label="endDate" aria-describedby="basic-addon1" v-model="endDate">
                </div>
            </div>
            <div class="_mapDiv">
                <Map :pathArray='pathArray' :sendData="getData" :bookingCount="bookingCount" :myDesk="''"/>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-5 mb-5">
                <button class="btn btn-primary" @click="onClickMultipleBooking">Book</button>
            </div>
        </div>

        <!-- TeamBooking -->
        <div class="_teamBooking" v-if="option === 'teamBooking'">
            <div class="_form">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="">How many seats ?</span>
                    <input type="number" class="form-control" placeholder="No of seats (max of 6)" aria-label="" aria-describedby="basic-addon1" min="1" max="6" id="noOfSeats" @change="onClickNoOfSeats" @click="onClickNoOfSeats">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="">Select Date</span>
                    <input type="date" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="selectDate">
                </div>
                <div class="_emplIdDiv" v-if="showSeats">
                    <div v-for="index in bookingCount" :key="index">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="">Enter Empl {{index}} ID</span>
                            <input type="number" class="form-control" placeholder="Enter Employe ID" aria-label="" aria-describedby="basic-addon1" min="1" max="6" id="noOfSeats" @focusout="addEmplIds">
                        </div>
                    </div>
                </div>
            </div>
            <div class="_mapDiv">
                <Map :pathArray='pathArray' :sendData="getData" :bookingCount="bookingCount" :myDesk="''"/>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-5 mb-5">
                <button class="btn btn-primary" @click="onClickTeamBooking">Book</button>
            </div>
        </div>
    </div>
</template>

<script>
import Map from '../components/Map.vue'
export default {
    components:{
        Map
    },
    data() {
        return {
            option: 'singleDay',
            bookingCount: 1,
            pathArray: [],
            showSeats: false,
            data: [],
            startDate: '',
            endDate: '',
            selectDate: '',
            emplIds: []
        }
    },
    methods: {
        onClickOption (event) {
            // console.log(event.target.value)
            this.option = event.target.value
            this.showSeats = false
        },
        getData(data) {
            // console.log(data)
            this.data = data
        },
        onClickNoOfSeats (event) {
            // console.log('Seat count'+ event.target.value)
            var numberOfSeats = 0
            if (event.target.value === '' || event.target.value === null || event.target.value === undefined){
                numberOfSeats = 0
            } else {
                numberOfSeats = parseInt(event.target.value)
            }

            

            this.bookingCount = numberOfSeats
            this.showSeats = true

            if(numberOfSeats < 0) {
                this.bookingCount = 1
                this.showSeats = true
            }

            if(numberOfSeats === 0) {
                this.bookingCount = 0
                this.showSeats = true
            }


            if(numberOfSeats > 6) {
                this.bookingCount = 6
                this.showSeats = true
            } 
        },
        onClickSingleDay() {
            console.log('single', this.data)
        },
        onClickMultipleBooking (){
            console.log('multiple', this.data, this.startDate, this.endDate)
        },
        onClickTeamBooking () {
            console.log('team', this.data, this.bookingCount, this.emplIds, this.selectDate)
        },
        addEmplIds(event) {
            // console.log(event)
            // console.log(event.target.value)
            if(event.target.value !== null && event.target.value !== undefined && event.target.value !== '') {
                this.emplIds.push(event.target.value)
                // console.log(this.emplIds)
            }
            
        },
        showConfirmation() {
            window.location.href = this.$url+"/"
        }
    },
}
</script>
<style scoped>

    ._More ._title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 10px;
    }

    ._More ._options{
        margin-left: 100px;
    }

    ._More ._options div{
        margin-bottom: 10px;
    }

    ._More ._singleDayDiv{
        margin-left: 50px;
        width: 90%;
    }

    ._More ._singleDayDiv div{
        margin-bottom: 20px;
    }

    ._More ._multipleDayDiv{
        margin-left: 100px;
        width: 90%;
    }

    ._More ._multipleDayDiv ._form{
        width: 45%;
    }

    ._More ._teamBooking{
        margin-left: 100px;
        width: 80%;
    }

    ._More ._teamBooking ._form{
        width: 45%;
    }

</style>
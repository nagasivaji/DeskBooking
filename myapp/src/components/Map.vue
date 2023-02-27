<template>
    <div class="_map">
        <div class="_tableDiv">
            <!-- row 1 Desks-->
            <div class="_rowDiv _rowDiv1">
                <div class="_colDiv _colDiv1 cube" id="1,1">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C1-1')" @click="handleClick">C1-1</div></div>
                        <div class="c2"><div :class="getClass('C1-2')" @click="handleClick">C1-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C1-3')" @click="handleClick">C1-3</div></div>
                        <div class="c2"><div :class="getClass('C1-4')" @click="handleClick">C1-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv2 cube" id="1,2">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C2-1')" @click="handleClick">C2-1</div></div>
                        <div class="c2"><div :class="getClass('C2-2')" @click="handleClick">C2-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C2-3')" @click="handleClick">C2-3</div></div>
                        <div class="c2"><div :class="getClass('C2-4')" @click="handleClick">C2-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv3 conf" id="1,3" :class="getClass('CN-1')" @click="handleClick">Conference Room - 1</div>
                <!-- <div class="_colDiv _colDiv4 conf" id="1,4">
                </div> -->
                <div class="_colDiv _colDiv5 cube" id="1,5">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C3-1')" @click="handleClick">C3-1</div></div>
                        <div class="c2"><div :class="getClass('C3-2')" @click="handleClick">C3-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C3-3')" @click="handleClick">C3-3</div></div>
                        <div class="c2"><div :class="getClass('C3-4')" @click="handleClick">C3-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv6 cube" id="1,6">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C4-1')" @click="handleClick">C4-1</div></div>
                        <div class="c2"><div :class="getClass('C4-2')" @click="handleClick">C4-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C4-3')" @click="handleClick">C4-3</div></div>
                        <div class="c2"><div :class="getClass('C4-4')" @click="handleClick">C4-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv7 walk" id="1,7">
                    Door
                </div>
                <div class="_colDiv _colDiv8 cube" id="1,8">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C5-1')" @click="handleClick">C5-1</div></div>
                        <div class="c2"><div :class="getClass('C5-2')" @click="handleClick">C5-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C5-3')" @click="handleClick">C5-3</div></div>
                        <div class="c2"><div :class="getClass('C5-4')" @click="handleClick">C5-4</div></div>
                    </div>
                </div>
            </div>
            <!-- row 2  Walking-->
            <div class="_rowDiv _rowDiv2">
                <div class="_colDiv _colDiv9 walk" id="2,1">
                    <span v-if="pathArray.includes('2,1')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv10 walk " id="2,2">
                    <span v-if="pathArray.includes('2,2')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv11 walk" id="2,3">
                    <span v-if="pathArray.includes('2,3')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv12 walk" id="2,4">
                    <span v-if="pathArray.includes('2,4')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv13 walk" id="2,5">
                    <span v-if="pathArray.includes('2,5')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv14 walk" id="2,6">
                    <span v-if="pathArray.includes('2,6')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv15 walk" id="2,7">
                    <span v-if="pathArray.includes('2,7')"><img src="../assets/Images/vline.png" alt="" class="vline ms-5"></span>
                </div>
                <div class="_colDiv _colDiv16 cube" id="2,8">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C6-1')" @click="handleClick">C6-1</div></div>
                        <div class="c2"><div :class="getClass('C6-2')" @click="handleClick">C6-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C6-3')" @click="handleClick">C6-3</div></div>
                        <div class="c2"><div :class="getClass('C6-4')" @click="handleClick">C6-4</div></div>
                    </div>
                </div>
            </div>
            <!-- row 3 Desks -->
            <div class="_rowDiv _rowDiv3">
                <div class="_colDiv _colDiv17 cube" id="3,1">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C7-1')" @click="handleClick">C7-1</div></div>
                        <div class="c2"><div :class="getClass('C7-2')" @click="handleClick">C7-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C7-3')" @click="handleClick">C7-3</div></div>
                        <div class="c2"><div :class="getClass('C7-4')" @click="handleClick">C7-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv18 cube" id="3,2">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C8-1')" @click="handleClick">C8-1</div></div>
                        <div class="c2"><div :class="getClass('C8-2')" @click="handleClick">C8-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C8-3')" @click="handleClick">C8-3</div></div>
                        <div class="c2"><div :class="getClass('C8-4')" @click="handleClick">C8-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv19 cube" id="3,3">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C9-1')" @click="handleClick">C9-1</div></div>
                        <div class="c2"><div :class="getClass('C9-2')" @click="handleClick">C9-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C9-3')" @click="handleClick">C9-3</div></div>
                        <div class="c2"><div :class="getClass('C9-4')" @click="handleClick">C9-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv20 cube" id="3,4">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C10-1')" @click="handleClick">C10-1</div></div>
                        <div class="c2"><div :class="getClass('C10-2')" @click="handleClick">C10-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C10-3')" @click="handleClick">C10-3</div></div>
                        <div class="c2"><div :class="getClass('C10-4')" @click="handleClick">C10-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv21 cube" id="3,5">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C11-1')" @click="handleClick">C11-1</div></div>
                        <div class="c2"><div :class="getClass('C11-2')" @click="handleClick">C11-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C11-3')" @click="handleClick">C11-3</div></div>
                        <div class="c2"><div :class="getClass('C11-4')" @click="handleClick">C11-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv22 cube" id="3,6">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C12-1')" @click="handleClick">C12-1</div></div>
                        <div class="c2"><div :class="getClass('C12-2')" @click="handleClick">C12-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C12-3')" @click="handleClick">C12-3</div></div>
                        <div class="c2"><div :class="getClass('C12-4')" @click="handleClick">C12-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv23 walk" id="3,7">
                    <span v-if="pathArray.includes('3,7')"><img src="../assets/Images/vline.png" alt="" class="vline ms-3"></span>
                </div>
                <div class="_colDiv _colDiv24 cube" id="3,8">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C13-1')" @click="handleClick">C13-1</div></div>
                        <div class="c2"><div :class="getClass('C13-2')" @click="handleClick">C13-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C13-3')" @click="handleClick">C13-3</div></div>
                        <div class="c2"><div :class="getClass('C13-4')" @click="handleClick">C13-4</div></div>
                    </div>
                </div>
            </div>
            <!-- row 4 Desks -->
            <div class="_rowDiv _rowDiv4">
                <div class="_colDiv _colDiv25 cube" id="4,1">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C14-1')" @click="handleClick">C14-1</div></div>
                        <div class="c2"><div :class="getClass('C14-2')" @click="handleClick">C14-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C14-3')" @click="handleClick">C14-3</div></div>
                        <div class="c2"><div :class="getClass('C14-4')" @click="handleClick">C14-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv26 cube" id="4,2">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C15-1')" @click="handleClick">C15-1</div></div>
                        <div class="c2"><div :class="getClass('C15-2')" @click="handleClick">C15-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C15-3')" @click="handleClick">C15-3</div></div>
                        <div class="c2"><div :class="getClass('C15-4')" @click="handleClick">C15-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv27 cube" id="4,3">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C16-1')" @click="handleClick">C16-1</div></div>
                        <div class="c2"><div :class="getClass('C16-2')" @click="handleClick">C16-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C16-3')" @click="handleClick">C16-3</div></div>
                        <div class="c2"><div :class="getClass('C16-4')" @click="handleClick">C16-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv28 cube" id="4,4">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C17-1')" @click="handleClick">C17-1</div></div>
                        <div class="c2"><div :class="getClass('C17-2')" @click="handleClick">C17-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C17-3')" @click="handleClick">C17-3</div></div>
                        <div class="c2"><div :class="getClass('C17-4')" @click="handleClick">C17-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv29 conf" id="4,5" :class="getClass('CN-2')" @click="handleClick">Conference Room - 2</div>
                <!-- <div class="_colDiv _colDiv30 conf" id="4,6">
                </div> -->
                <div class="_colDiv _colDiv31 walk" id="4,7">
                    <span v-if="pathArray.includes('4,7')"><img src="../assets/Images/vline.png" alt="" class="vline ms-2"></span>
                </div>
                <div class="_colDiv _colDiv32 cube" id="4,8">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C18-1')" @click="handleClick">C18-1</div></div>
                        <div class="c2"><div :class="getClass('C18-2')" @click="handleClick">C18-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C18-3')" @click="handleClick">C18-3</div></div>
                        <div class="c2"><div :class="getClass('C18-4')" @click="handleClick">C18-4</div></div>
                    </div>
                </div>
            </div>
            <!-- row 5  Walking-->
            <div class="_rowDiv _rowDiv5">
                <div class="_colDiv _colDiv33 walk" id="5,1">
                    <span v-if="pathArray.includes('5,1')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv34 walk" id="5,2">
                    <span v-if="pathArray.includes('5,2')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv35 walk" id="5,3">
                    <span v-if="pathArray.includes('5,3')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv36 walk" id="5,4">
                    <span v-if="pathArray.includes('5,4')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv37 walk" id="5,5">
                    <span v-if="pathArray.includes('5,5')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv38 walk" id="5,6">
                    <span v-if="pathArray.includes('5,6')"><img src="../assets/Images/hline.png" alt="" class="hline"></span>
                </div>
                <div class="_colDiv _colDiv39 walk" id="5,7">
                    <span v-if="pathArray.includes('5,7')"><img src="../assets/Images/vline.png" alt="" class="vline ms-5"></span>
                </div>
                <div class="_colDiv _colDiv40 cube" id="5,8">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C19-1')" @click="handleClick">C19-1</div></div>
                        <div class="c2"><div :class="getClass('C19-2')" @click="handleClick">C19-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C19-3')" @click="handleClick">C19-3</div></div>
                        <div class="c2"><div :class="getClass('C19-4')" @click="handleClick">C19-4</div></div>
                    </div>
                </div>
            </div>
            <!-- row 6 Desks -->
            <div class="_rowDiv _rowDiv6">
                <div class="_colDiv _colDiv41 conf" id="6,1" :class="getClass('CN-3')" @click="handleClick">Conference Room - 3</div>
                <div class="_colDiv _colDiv42 cube" id="6,2">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C20-1')" @click="handleClick">C20-1</div></div>
                        <div class="c2"><div :class="getClass('C20-2')" @click="handleClick">C20-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C20-3')" @click="handleClick">C20-3</div></div>
                        <div class="c2"><div :class="getClass('C20-4')" @click="handleClick">C20-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv43 cube" id="6,3">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C21-1')" @click="handleClick">C21-1</div></div>
                        <div class="c2"><div :class="getClass('C21-3')" @click="handleClick">C21-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C21-3')" @click="handleClick">C21-3</div></div>
                        <div class="c2"><div :class="getClass('C21-4')" @click="handleClick">C21-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv44 cube" id="6,4">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C22-1')" @click="handleClick">C22-1</div></div>
                        <div class="c2"><div :class="getClass('C22-2')" @click="handleClick">C22-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C22-3')" @click="handleClick">C22-3</div></div>
                        <div class="c2"><div :class="getClass('C22-4')" @click="handleClick">C22-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv45 cube" id="6,5">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C23-1')" @click="handleClick">C23-1</div></div>
                        <div class="c2"><div :class="getClass('C23-2')" @click="handleClick">C23-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C23-3')" @click="handleClick">C23-3</div></div>
                        <div class="c2"><div :class="getClass('C23-4')" @click="handleClick">C23-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv46 cube" id="6,6">
                    <div class="r1">
                        <div class="c1"><div :class="getClass('C24-1')" @click="handleClick">C24-1</div></div>
                        <div class="c2"><div :class="getClass('C24-2')" @click="handleClick">C24-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div :class="getClass('C24-3')" @click="handleClick">C24-3</div></div>
                        <div class="c2"><div :class="getClass('C24-4')" @click="handleClick">C24-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv47 conf" id="6,7" :class="getClass('CN-4')" @click="handleClick">Conference Room - 4</div>
                <!-- <div class="_colDiv _colDiv48 conf" id="6,8">
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pathArray', 'sendData', 'bookingCount', 'myDesk'],
    data() {
        return {
            // bookedDesks : ['C1-1', 'C1-2', 'C1-4', 'CN-1', 'C3-1', 'C3-2', 'C3-4','C4-1', 'C4-4', 'C5-1', 'C5-2', 'C5-3', 'C5-4', 'C6-1', 'C6-2', 'C7-3', 'C7-1', 'C8-1', 'C8-2', 'C8-3', 'C8-4', 'C9-1', 'C9-4', 'C11-1', 'C11-2', 'C11-3', 'C12-4', 'C13-1', 'C13-2', 'C13-3', 'C14-2', 'C14-4', 'C15-1', 'C15-2', 'C15-3', 'C15-4', 'C16-2', 'C17-2', 'C18-2', 'C18-4', 'C19-3', 'C20-1', 'C20-2', 'C20-4','C21-1', 'C22-2', 'C22-4', 'C23-2', 'C23-1', 'C24-1', 'C24-2'],
            // reserverdDesks : ['C1-3', 'C2-1', 'C2-2', 'C2-4', 'CN-2', 'C4-2', 'C4-3', 'C6-3', 'C7-2', 'C9-2', 'C10-2', 'C12-3', 'C12-2', 'C14-3', 'C16-1', 'C16-3', 'C17-1', 'C18-1', 'C19-2', 'C20-3', 'C21-3', 'C23-3', 'C24-3'],
            selectedDesks: [],
            pathArray : this.pathArray
        }
    },
    methods: {
        getClass (deskId){
            if (this.$bookedArray.includes(deskId)) {
                return 'booked'
            } else if (this.$reserverdArray.includes(deskId)) {
                return 'reserved'
            } else if(this.selectedDesks.includes(deskId)) {
                return 'selected'
            } else if(this.myDesk.includes(deskId)) {
                return 'myDesk'
            }
            else {
                return 'notBooked'
            }
        },
        handleClick (event){
            var deskId = event.target.innerHTML;
            if(deskId.includes('Conference')){
                deskId = 'CN-' + deskId.split(' ')[3];
            }
            
            // console.log(deskId)
            if(this.selectedDesks.includes(deskId)) {
                const index = this.selectedDesks.indexOf(deskId);
                if (index > -1) { // only splice array when item is found
                    this.selectedDesks.splice(index, 1); // 2nd parameter means remove one item only
                }
            } else {
                this.selectedDesks.push(deskId);
            }   

            // console.log(this.bookingCount)
            if(this.selectedDesks.length > this.bookingCount) {
                this.selectedDesks.shift()
            }
            // console.log(this.selectedDesks)
            this.sendData(this.selectedDesks)
        }
    },
}
</script>

<style  scoped>

    ._map{
        color: white;
        background-color: rgb(77, 77, 77);
        zoom: 65%;
        font-family: 'Ubuntu', sans-serif;
    }

    /* MAIN TABLE */
    ._map ._tableDiv{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
    }

    ._map ._tableDiv ._rowDiv{
        display: flex;
    }

    ._map ._tableDiv ._rowDiv ._colDiv{
        margin: 10px;
    }

    ._map ._tableDiv ._rowDiv .cube{
        border: 2px solid rgb(197, 197, 197);
        border-radius: 5px;
    }

    /* SUB TABLE */
    ._map ._tableDiv ._rowDiv ._colDiv div{
        display: flex;
        justify-content: column;
        align-items: center;
        text-align: center;
    }

    ._map ._tableDiv ._rowDiv ._colDiv div div{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
    }

    ._map ._tableDiv ._rowDiv ._colDiv div div div{
        widows: 80%;
        height: 80%;
        text-align: center;
        align-items: center;
        background-color: rgb(85, 170, 0);
        margin: 5px;
        cursor: pointer;
        border-radius: 5px;
    }

    ._map ._tableDiv ._rowDiv .conf{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-content: center;
        cursor: pointer;
        border-radius: 5px;
        padding: 5px;
        width: 270px;
        
    }

    ._map ._tableDiv ._rowDiv .walk{
        width: 120px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* Hard Changes */
    ._map ._tableDiv ._rowDiv ._colDiv16{
        margin-left: 35px;
    }

    ._map ._tableDiv ._rowDiv ._colDiv40{
        margin-left: 35px;
    }

    ._map ._tableDiv ._rowDiv ._colDiv41{
        width: 180px;
    }

    ._map ._tableDiv ._rowDiv ._colDiv47{
        width: 240px;
    }

    /* Walk area */
    ._map ._tableDiv ._rowDiv .walk span {
        font-size: 50px;
    }

    ._map ._tableDiv ._rowDiv .walk span .vline{
        width: 10px;
        height: 50px;
    }

    ._map ._tableDiv ._rowDiv .walk span .hline{
        width: 50px;
        height: 10px;
    }


    /* Color coding  for CUBES*/
    ._map ._tableDiv ._rowDiv .cube div div .booked{
        background-color: red;
        pointer-events:none
    }

    ._map ._tableDiv ._rowDiv .cube div div .notBooked{
        background-color: rgb(85, 170, 0);
    }

    ._map ._tableDiv ._rowDiv .cube div div .reserved{
        background-color: rgb(211, 214, 0);
        pointer-events:none
    }

    ._map ._tableDiv ._rowDiv .cube div div .selected{
        background-color: rgb(133, 133, 133);
    }

    ._map ._tableDiv ._rowDiv .cube div div .myDesk{
        background-color: rgb(51, 13, 242);
    }

    /* Color coding for CONF ROOMS */
    ._map ._tableDiv ._rowDiv .booked{
        background-color: red;
        pointer-events:none
    }

    ._map ._tableDiv ._rowDiv .notBooked{
        background-color: rgb(85, 170, 0);
    }

    ._map ._tableDiv ._rowDiv .reserved{
        background-color: rgb(211, 214, 0);
        pointer-events:none
    }

    ._map ._tableDiv ._rowDiv .selected{
        background-color: rgb(133, 133, 133);
    }

    ._map ._tableDiv ._rowDiv .myDesk{
        background-color: rgb(51, 13, 242);
    }


</style>

<template>
    <div class="_map">
        <div class="_tableDiv">
            <!-- row 1 Desks-->
            <div class="_rowDiv _rowDiv1">
                <div class="_colDiv _colDiv1 cube" id="1,1">
                    <div class="r1">
                        <div class="c1"><div :class="[bookingDetails.bookedDesks.includes('C1-1') ? 'booked' : 'notBooked']" @click="handleClick">C1-1</div></div>
                        <div class="c2"><div >C1-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C1-3</div></div>
                        <div class="c2"><div>C1-4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv2 cube" id="1,2">
                    <div class="r1">
                        <div class="c1"><div>C2-1</div></div>
                        <div class="c2"><div>C2-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C1-1</div></div>
                        <div class="c2"><div>C1-1</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv3 conf" id="1,3">
                    <div>
                        <span>Conference</span>
                        <span>Room</span>
                        <span>-</span>
                        <span>1</span>
                    </div>
                </div>
                <!-- <div class="_colDiv _colDiv4 conf" id="1,4">
                </div> -->
                <div class="_colDiv _colDiv5 cube" id="1,5">
                    <div class="r1">
                        <div class="c1"><div>C3</div></div>
                        <div class="c2"><div>C3</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C3</div></div>
                        <div class="c2"><div>C3</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv6 cube" id="1,6">
                    <div class="r1">
                        <div class="c1"><div>C4</div></div>
                        <div class="c2"><div>C4</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C4</div></div>
                        <div class="c2"><div>C4</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv7 walk" id="1,7">
                    <span>Door 2</span>
                </div>
                <div class="_colDiv _colDiv8 cube" id="1,8">
                    <div class="r1">
                        <div class="c1"><div>C5</div></div>
                        <div class="c2"><div>C5</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C5</div></div>
                        <div class="c2"><div>C5</div></div>
                    </div>
                </div>
            </div>
            <!-- row 2  Walking-->
            <div class="_rowDiv _rowDiv2">
                <div class="_colDiv _colDiv9 walk" id="2,1">
                    <span>Door 1</span>
                </div>
                <div class="_colDiv _colDiv10 walk " id="2,2">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv11 walk" id="2,3">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv12 walk" id="2,4">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv13 walk" id="2,5">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv14 walk" id="2,6">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv15 walk" id="2,7">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv16 cube" id="2,8">
                    <div class="r1">
                        <div class="c1"><div>C6</div></div>
                        <div class="c2"><div>C6</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C6</div></div>
                        <div class="c2"><div>C6</div></div>
                    </div>
                </div>
            </div>
            <!-- row 3 Desks -->
            <div class="_rowDiv _rowDiv3">
                <div class="_colDiv _colDiv17 cube" id="3,1">
                    <div class="r1">
                        <div class="c1"><div>C7</div></div>
                        <div class="c2"><div>C7</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C7</div></div>
                        <div class="c2"><div>C7</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv18 cube" id="3,2">
                    <div class="r1">
                        <div class="c1"><div>C8</div></div>
                        <div class="c2"><div>C8</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C8</div></div>
                        <div class="c2"><div>C8</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv19 cube" id="3,3">
                    <div class="r1">
                        <div class="c1"><div>C9</div></div>
                        <div class="c2"><div>C9</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C9</div></div>
                        <div class="c2"><div>C9</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv20 cube" id="3,4">
                    <div class="r1">
                        <div class="c1"><div>C10</div></div>
                        <div class="c2"><div>C10</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C10</div></div>
                        <div class="c2"><div>C10</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv21 cube" id="3,5">
                    <div class="r1">
                        <div class="c1"><div>C11</div></div>
                        <div class="c2"><div>C11</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C11</div></div>
                        <div class="c2"><div>C11</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv22 cube" id="3,6">
                    <div class="r1">
                        <div class="c1"><div>C12</div></div>
                        <div class="c2"><div>C12</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C12</div></div>
                        <div class="c2"><div>C12</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv23 walk" id="3,7">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv24 cube" id="3,8">
                    <div class="r1">
                        <div class="c1"><div>C13</div></div>
                        <div class="c2"><div>C13</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C13</div></div>
                        <div class="c2"><div>C13</div></div>
                    </div>
                </div>
            </div>
            <!-- row 4 Desks -->
            <div class="_rowDiv _rowDiv4">
                <div class="_colDiv _colDiv25 cube" id="4,1">
                    <div class="r1">
                        <div class="c1"><div>C14</div></div>
                        <div class="c2"><div>C14</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C14</div></div>
                        <div class="c2"><div>C14</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv26 cube" id="4,2">
                    <div class="r1">
                        <div class="c1"><div>C15</div></div>
                        <div class="c2"><div>C15</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C15</div></div>
                        <div class="c2"><div>C15</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv27 cube" id="4,3">
                    <div class="r1">
                        <div class="c1"><div>C16</div></div>
                        <div class="c2"><div>C16</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C16</div></div>
                        <div class="c2"><div>C16</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv28 cube" id="4,4">
                    <div class="r1">
                        <div class="c1"><div>C17</div></div>
                        <div class="c2"><div>C17</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C17</div></div>
                        <div class="c2"><div>C17</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv29 conf" id="4,5">
                    <div>
                        <span>Conference</span>
                        <span>Room</span>
                        <span>-</span>
                        <span>2</span>
                    </div>
                </div>
                <!-- <div class="_colDiv _colDiv30 conf" id="4,6">
                </div> -->
                <div class="_colDiv _colDiv31 walk" id="4,7">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv32 cube" id="4,8">
                    <div class="r1">
                        <div class="c1"><div>C18</div></div>
                        <div class="c2"><div>C18</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C18</div></div>
                        <div class="c2"><div>C18</div></div>
                    </div>
                </div>
            </div>
            <!-- row 5  Walking-->
            <div class="_rowDiv _rowDiv5">
                <div class="_colDiv _colDiv33 walk" id="5,1">
                    <span>Door 3</span>
                </div>
                <div class="_colDiv _colDiv34 walk" id="5,2">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv35 walk" id="5,3">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv36 walk" id="5,4">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv37 walk" id="5,5">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv38 walk" id="5,6">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv39 walk" id="5,7">
                    <span></span>
                </div>
                <div class="_colDiv _colDiv40 cube" id="5,8">
                    <div class="r1">
                        <div class="c1"><div>C19</div></div>
                        <div class="c2"><div>C19</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C19</div></div>
                        <div class="c2"><div>C19</div></div>
                    </div>
                </div>
            </div>
            <!-- row 6 Desks -->
            <div class="_rowDiv _rowDiv6">
                <div class="_colDiv _colDiv41 conf" id="6,1">
                    <div>
                        <span>Conference</span>
                        <span>Room</span>
                        <span>-</span>
                        <span>3</span>
                    </div>
                </div>
                <div class="_colDiv _colDiv42 cube" id="6,2">
                    <div class="r1">
                        <div class="c1"><div>C20</div></div>
                        <div class="c2"><div>C20</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C20</div></div>
                        <div class="c2"><div>C20</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv43 cube" id="6,3">
                    <div class="r1">
                        <div class="c1"><div>C21</div></div>
                        <div class="c2"><div>C21</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C21</div></div>
                        <div class="c2"><div>C21</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv44 cube" id="6,4">
                    <div class="r1">
                        <div class="c1"><div>C22</div></div>
                        <div class="c2"><div>C22</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C22</div></div>
                        <div class="c2"><div>C22</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv45 cube" id="6,5">
                    <div class="r1">
                        <div class="c1"><div>C23</div></div>
                        <div class="c2"><div>C23</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C23</div></div>
                        <div class="c2"><div>C23</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv46 cube" id="6,6">
                    <div class="r1">
                        <div class="c1"><div>C24</div></div>
                        <div class="c2"><div>C24</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C24</div></div>
                        <div class="c2"><div>C24</div></div>
                    </div>
                </div>
                <div class="_colDiv _colDiv47 conf" id="6,7">
                    <div>
                        <span>Conference</span>
                        <span>Room</span>
                        <span>-</span>
                        <span>4</span>
                    </div>
                </div>
                <!-- <div class="_colDiv _colDiv48 conf" id="6,8">
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
export default {
    data() {
        return {
            bookingDetails: {
                bookedDesks: ['C1-1']
            },

            objectOfAttrs: {
                class: 'notBooked',
            }
        }
    },
    methods: {
        handleClick (event){
            console.log(event)
        }
    },
}
</script>

<style  scoped>

    ._map{
        color: white;
        background-color: rgb(77, 77, 77);
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
        width: 50px;
        height: 50px;
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
        background-color: rgb(0, 192, 160);
        display: flex;
        flex-direction: row;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
        padding: 5px;
        width: 230px;
        text-align: center;
    }

    ._map ._tableDiv ._rowDiv .walk{
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* Hard Changes */
    ._map ._tableDiv ._rowDiv ._colDiv16{
        margin-left: 33px;
    }

    ._map ._tableDiv ._rowDiv ._colDiv40{
        margin-left: 33px;
    }

    ._map ._tableDiv ._rowDiv ._colDiv41{
        width: 165px;
    }

    ._map ._tableDiv ._rowDiv ._colDiv47{
        width: 165px;
    }

    ._map ._tableDiv ._rowDiv ._colDiv div div .booked{
        background-color: red;
        pointer-events:none
    }

    ._map ._tableDiv ._rowDiv ._colDiv div div .notBooked{
        background-color: rgb(85, 170, 0);
    }
</style>

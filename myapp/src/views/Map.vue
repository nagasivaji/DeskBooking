<template>
    <div class="_map">
        <div class="_tableDiv">
            <!-- row 1 Desks-->
            <div class="_rowDiv _rowDiv1">
                <div class="_colDiv" id="1,1">
                    <div class="r1">
                        <div class="c1"><div :class="[bookingDetails.bookedDesks.includes('C1-1') ? 'booked' : 'notBooked']">C1-1</div></div>
                        <div class="c2"><div :class="[bookingDetails.bookedDesks.includes('C1-2') ? 'booked' : 'notBooked']">C1-2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C1-3</div></div>
                        <div class="c2"><div>C1-4</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="1,2">
                    <div class="r1">
                        <div class="c1"><div>C2-1</div></div>
                        <div class="c2"><div>C2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C2</div></div>
                        <div class="c2"><div>C2-4</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="1,3">
                    <div class="r1">
                        <div class="c1"><div>CR1</div></div>
                        <div class="c2"><div>CR1</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>CR1</div></div>
                        <div class="c2"><div>CR1</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="1,4">
                    <div class="r1">
                        <div class="c1"><div>CR1</div></div>
                        <div class="c2"><div>CR1</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>CR1</div></div>
                        <div class="c2"><div>CR1</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="1,5">
                    <div class="r1">
                        <div class="c1"><div>C3</div></div>
                        <div class="c2"><div>C3</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C3</div></div>
                        <div class="c2"><div>C3</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="1,6">
                    <div class="r1">
                        <div class="c1"><div>C4</div></div>
                        <div class="c2"><div>C4</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C4</div></div>
                        <div class="c2"><div>C4</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="1,7">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="1,8">
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
                <div class="_colDiv" id="2,1">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="2,2"><div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="2,3"><div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="2,4"><div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="2,5"><div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="2,6"><div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="2,7"><div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="2,8">
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
                <div class="_colDiv" id="3,1">
                    <div class="r1">
                        <div class="c1"><div>C7</div></div>
                        <div class="c2"><div>C7</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C7</div></div>
                        <div class="c2"><div>C7</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="3,2">
                    <div class="r1">
                        <div class="c1"><div>C8</div></div>
                        <div class="c2"><div>C8</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C8</div></div>
                        <div class="c2"><div>C8</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="3,3">
                    <div class="r1">
                        <div class="c1"><div>C9</div></div>
                        <div class="c2"><div>C9</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C9</div></div>
                        <div class="c2"><div>C9</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="3,4">
                    <div class="r1">
                        <div class="c1"><div>C10</div></div>
                        <div class="c2"><div>C10</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C10</div></div>
                        <div class="c2"><div>C10</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="3,5">
                    <div class="r1">
                        <div class="c1"><div>C11</div></div>
                        <div class="c2"><div>C11</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C11</div></div>
                        <div class="c2"><div>C11</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="3,6">
                    <div class="r1">
                        <div class="c1"><div>C12</div></div>
                        <div class="c2"><div>C12</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C12</div></div>
                        <div class="c2"><div>C12</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="3,7">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div></div>
                <div class="_colDiv" id="3,8">
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
                <div class="_colDiv" id="4,1">
                    <div class="r1">
                        <div class="c1"><div>C14</div></div>
                        <div class="c2"><div>C14</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C14</div></div>
                        <div class="c2"><div>C14</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="4,2">
                    <div class="r1">
                        <div class="c1"><div>C15</div></div>
                        <div class="c2"><div>C15</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C15</div></div>
                        <div class="c2"><div>C15</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="4,3">
                    <div class="r1">
                        <div class="c1"><div>C16</div></div>
                        <div class="c2"><div>C16</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C16</div></div>
                        <div class="c2"><div>C16</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="4,4">
                    <div class="r1">
                        <div class="c1"><div>C17</div></div>
                        <div class="c2"><div>C17</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C17</div></div>
                        <div class="c2"><div>C17</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="4,5">
                    <div class="r1">
                        <div class="c1"><div>CR2</div></div>
                        <div class="c2"><div>CR2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>CR2</div></div>
                        <div class="c2"><div>CR2</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="4,6">
                    <div class="r1">
                        <div class="c1"><div>CR2</div></div>
                        <div class="c2"><div>CR2</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>CR2</div></div>
                        <div class="c2"><div>CR2</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="4,7">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="4,8">
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
                <div class="_colDiv" id="5,1">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="5,2">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="5,3">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="5,4">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="5,5">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="5,6">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="5,7">
                    <div class="r1">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                    <div class="r2">
                        <div class="c1">WA</div>
                        <div class="c2">WA</div>
                    </div>
                </div>
                <div class="_colDiv" id="5,8">
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
                <div class="_colDiv" id="6,1">
                    <div class="r1">
                        <div class="c1"><div>CR3</div></div>
                        <div class="c2"><div>CR3</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>CR3</div></div>
                        <div class="c2"><div>CR3</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="6,2">
                    <div class="r1">
                        <div class="c1"><div>C20</div></div>
                        <div class="c2"><div>C20</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C20</div></div>
                        <div class="c2"><div>C20</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="6,3">
                    <div class="r1">
                        <div class="c1"><div>C21</div></div>
                        <div class="c2"><div>C21</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C21</div></div>
                        <div class="c2"><div>C21</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="6,4">
                    <div class="r1">
                        <div class="c1"><div>C22</div></div>
                        <div class="c2"><div>C22</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C22</div></div>
                        <div class="c2"><div>C22</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="6,5">
                    <div class="r1">
                        <div class="c1"><div>C23</div></div>
                        <div class="c2"><div>C23</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C23</div></div>
                        <div class="c2"><div>C23</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="6,6">
                    <div class="r1">
                        <div class="c1"><div>C24</div></div>
                        <div class="c2"><div>C24</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>C24</div></div>
                        <div class="c2"><div>C24</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="6,7">
                    <div class="r1">
                        <div class="c1"><div>CR4</div></div>
                        <div class="c2"><div>CR4</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>CR4</div></div>
                        <div class="c2"><div>CR4</div></div>
                    </div>
                </div>
                <div class="_colDiv" id="6,8">
                    <div class="r1">
                        <div class="c1"><div>CR4</div></div>
                        <div class="c2"><div>CR4</div></div>
                    </div>
                    <div class="r2">
                        <div class="c1"><div>CR4</div></div>
                        <div class="c2"><div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">CR4</div></div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="handleClick" >click</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
  Tooltip on top
</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookingDetails: {
                bookedDesks: ['C1-1']
            }
        }
    },
    methods: {
        handleClick () {
            this.bookingDetails = { bookedDesks: ['C1-1','C1-2']}
        }
    },
}
</script>

<style  scoped>

    ._map{
        color: white;
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
        border: 1px solid white;
        background-color: rgb(70, 70, 70);
    }

    ._map ._tableDiv ._rowDiv ._colDiv{
        border: 2px solid rgb(21, 0, 255);
        margin: 10px;
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

    ._map ._tableDiv ._rowDiv ._colDiv div div .booked{
        background-color: red;
    }

    ._map ._tableDiv ._rowDiv ._colDiv div div .notBooked{
        background-color: rgb(85, 170, 0);
    }
</style>

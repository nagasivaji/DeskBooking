<template>
    <div class="home">
        <div class="_navBar">
            <NavBar />
        </div>
        <div class="_mainArea" v-if="!bookingStatus">
            <div class="_logoImg">
                <img src="../assets/Images/DeskLogo.png" alt="">
            </div>
            <div class="_actionsArea">
                <div>
                    <StatusInfoVue :bookingStatus="bookingStatus" />
                </div>
                <div>
                    <button  @click="onClickOneTapBtn" :class="[bookingStatus ? 'btn btn-danger' : 'btn btn-success']" >
                        <span v-if="bookingStatus">Cancle Desk</span>
                        <span v-else >Smart Booking <i class="bi bi-lightning-fill"></i></span>
                    </button>
                </div>
                <div>
                    <!-- <MoreActionBtns /> -->
                    <router-link class="btn btn-primary" to="/more">More <i class="bi bi-three-dots"></i></router-link>
                </div>
            </div>
        </div>
        <div v-if="bookingStatus" class="_showResultMap">
            <Map :pathArray='pathArray' :sendData="getData" :bookingCount="0" :myDesk="myDesk" />
        </div>
    </div>
</template>

<script>
import StatusInfoVue from '../components/StatusInfo.vue'
import NavBar from './../components/NavBar.vue'
import MoreActionBtns from '../components/MoreActionBtns.vue'
import Map from '../components/Map.vue'
import { notification } from "ant-design-vue";
import axios from 'axios';

export default {
    name: 'Home',
        components: {
        NavBar,
        StatusInfoVue,
        MoreActionBtns,
        Map,
    },
    data() {
        return {
            bookingStatus: false,
            pathArray: [],
            myDesk: 'C16-2',
            queue: [],
        }
    },
    beforeMount() {
        if (localStorage.EmployeeID === undefined || localStorage.EmployeeID === null || localStorage.EmployeeID === ''){
            window.location.href = "http://localhost:3030/#/"
        }
        // console.log('Employee ID: ',localStorage.EmployeeID)
        if (this.bookingStatus) {
            this.createPathArray()
        }

        this.callAPI()
    },
    methods: {
        onClickOneTapBtn () {
            this.bookingStatus = !this.bookingStatus
            this.showNotification()
        },
        getData() {

        },
        createPathArray (){
            // clearing path array
            this.pathArray = []
            // * -> walking area
            // 0 -> Not a walking area
            // s -> Source point
            // d -> Destination point
            var grid = [
                    [ '0', '0', '0', '0', '0', '0', '*', '0' ],
                    [ '*', '*', '*', '*', '*', '*', '*', '0' ],
                    [ '0', '0', '0', '0', '0', '0', '*', '0' ],
                    [ '0', '0', '0', '0', '0', '0', '*', '0' ],
                    [ '*', '*', '*', '*', '*', '*', '*', '0' ],
                    [ '0', '0', '0', '0', '0', '0', '0', '0' ],
            ]
            // this is grid of 6X8

            var myCube = this.myDesk.split("-")[0]
            // console.log(myCube)

            var destination = null;

            if(myCube === 'C1'){
                destination = new Node(0,0)
            } else if(myCube === 'C2'){
                destination = new Node(0,1)
            }
            else if(myCube === 'CN-1'){
                destination = new Node(0,2)
            }
            else if(myCube === 'C3'){
                destination = new Node(0,4)
            }
            else if(myCube === 'C4'){
                destination = new Node(0,5)
            }
            else if(myCube === 'C5'){
                destination = new Node(0,7)
            }
            else if(myCube === 'C6'){
                destination = new Node(1,7)
            }
            else if(myCube === 'C7'){
                destination = new Node(2,0)
            }
            else if(myCube === 'C8'){
                destination = new Node(2,1)
            }
            else if(myCube === 'C9'){
                destination = new Node(2,2)
            }
            else if(myCube === 'C10'){
                destination = new Node(2,3)
            }
            else if(myCube === 'C11'){
                destination = new Node(2,4)
            }
            else if(myCube === 'C12'){
                destination = new Node(2,5)
            }
            else if(myCube === 'C13'){
                destination = new Node(2,7)
            }
            else if(myCube === 'C14'){
                destination = new Node(3,0)
            }
            else if(myCube === 'C15'){
                destination = new Node(3,1)
            }
            else if(myCube === 'C16'){
                destination = new Node(3,2)
            }
            else if(myCube === 'C17'){
                destination = new Node(3,3)
            }
            else if(myCube === 'CN-2'){
                destination = new Node(3,4)
            }
            else if(myCube === 'C18'){
                destination = new Node(3,7)
            }
            else if(myCube === 'C19'){
                destination = new Node(4,7)
            }
            else if(myCube === 'CN-3'){
                destination = new Node(5,0)
            }
            else if(myCube === 'C20'){
                destination = new Node(5,2)
            }
            else if(myCube === 'C21'){
                destination = new Node(5,3)
            }
            else if(myCube === 'C22'){
                destination = new Node(5,4)
            }
            else if(myCube === 'C23'){
                destination = new Node(5,5)
            }
            else if(myCube === 'C24'){
                destination = new Node(5,6)
            }
            else if(myCube === 'CN-4'){
                destination = new Node(5,7)
            }

            var source = new Node(0, 6);
            // console.log(source, destination);

            // Path tracking Boolean Array
            var visited = [
                    [ false, false, false, false, false, false, false, false ],
                    [ false, false, false, false, false, false, false, false ],
                    [ false, false, false, false, false, false, false, false ],
                    [ false, false, false, false, false, false, false, false ],
                    [ false, false, false, false, false, false, false, false ],
                    [ false, false, false, false, false, false, false, false ],
            ];
            // console.log(visited)
            visited[source.row][source.col] = true;

            // updating source and destination in grid
            grid[source.row][source.col] = 's';
            grid[destination.row][destination.col] = 'd';
            // console.log(grid)

            // Adding source Node to queue
            this.queue.push(source);

            // Invoking Recursive call for shortest path
            this.findPath(grid, visited);

        },
        findPath(grid, visited) {
            var node = this.queue.shift()
            // Destination found;
            if (grid[node.row][node.col] == 'd') {
                for(var x=0; x<visited.length; x++){
                    for(var y=0; y<visited[x].length; y++){
                        if (visited[x][y]) {
                            // console.log((x+1) +","+ (y+1) + "   ");
                            this.pathArray.push((x+1) +","+ (y+1))
                        } else {
                            // console.log("-,-" + "   ");
                        }
                    }
                    console.log();
                    console.log();
                }
                return;
            }

            // moving up
            if (this.isValid(node.row - 1, node.col, grid, visited)) {
                this.queue.push(new Node(node.row - 1, node.col));
                visited[node.row - 1][node.col] = true;
                this.findPath(grid, visited);
                visited[node.row - 1][node.col] = false;
            }

            // moving down
            if (this.isValid(node.row + 1, node.col, grid, visited)) {
                this.queue.push(new Node(node.row + 1, node.col));
                visited[node.row + 1][node.col] = true;
                this.findPath(grid, visited);
                visited[node.row + 1][node.col] = false;
            }

            // moving left
            if (this.isValid(node.row , node.col - 1, grid, visited)) {
                this.queue.push(new Node(node.row, node.col - 1));
                visited[node.row][node.col - 1] = true;
                this.findPath(grid, visited);
                visited[node.row][node.col - 1] = false;
            }

            // moving right
            if (this.isValid(node.row , node.col + 1, grid, visited)) {
                this.queue.push(new Node(node.row , node.col + 1));
                visited[node.row][node.col + 1] = true;
                this.findPath(grid, visited);
                visited[node.row][node.col + 1] = false;
            }
        },
        // checking where it's valid or not
        isValid(x, y, grid, visited)
        {
            if (x >= 0 && y >= 0 && x < grid.length
                    && y < grid[0].length && grid[x][y] != '0'
                    && visited[x][y] == false) {
                return true;
            }
            return false;
        },
        callAPI () {
            axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(result => {
                console.log(result.data);
            })
        },
        showNotification() {

            console.log("@@@@@@@@@@@@@@@@@@")
            this.$notification.success({
            message: 'Booking Confirmed',
            description: '11th floor Blue Wing C-102'
            })
        }
    },
}

class Node {
    constructor (row, col)
    {
        this.row = row;
        this.col = col;
    }
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

    .home ._mainArea ._actionsArea div{
        margin-bottom: 20px;
    }

    .home ._showResultMap{
        pointer-events:none
    }
</style>


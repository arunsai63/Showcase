import React, { Component } from 'react';

interface IProps {

}

interface IState {
    head: Node | null,
    data: number | null,
    key: number //to force reload the component
}

class Node {
    data: number
    next: Node | null
    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

class SingleLinkedList extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            head: null,
            data: 1,
            key: Date.now()
        }
    }

    reload = () => {
        this.setState({
            key: Date.now()
        })
    }

    // algorithm methods start
    clear = () => {
        this.setState({
            head: null,
            data: 1
        })
    }

    addNode = () => {
        if (this.state.data === null) {
            alert('data cant be empty')
            return
        }

        let temp = this.state.head
        if (temp === null) {
            this.setState({
                head: new Node(this.state.data),
                data: this.state.data + 1
            })
            return
        }
        while (temp.next !== null) {
            temp = temp?.next
        }
        temp.next = new Node(this.state.data)
        this.setState({
            data: this.state.data + 1
        })
    }

    addNodeStart = () => {
        if (this.state.data === null) {
            alert('data cant be empty')
            return
        }

        let temp = new Node(this.state.data)
        temp.next = this.state.head

        this.setState({
            head: temp,
            data: this.state.data + 1
        })
    }

    deleteStart = () => {
        if (this.state.head === null) {
            return alert("list is empty")
        }

        if (this.state.head.next === null) {
            this.setState({
                head: null
            })
        } else {
            this.setState({
                head: this.state.head.next
            })
        }
    }

    deleteEnd = () => {
        if (this.state.head === null) {
            return alert("list is empty")
        }
        let temp = this.state.head
        let temp2: Node | null = null

        while (temp.next !== null) {
            temp2 = temp
            temp = temp.next
        }

        if (temp2 !== null) {
            temp2.next = null
            this.reload()
        } else {
            this.setState({
                head: null
            })
        }
    }

    deleteByIndex = (index: number) => {
        if (this.state.head === null) {
            return alert("list is empty")
        }
        let temp = this.state.head
        let temp2: Node | null = null
        let count = 0

        if (index === 0) {
            return this.deleteStart()
        }

        while (temp.next !== null) {
            temp2 = temp
            temp = temp.next
            ++count
            if (count === index) {
                break
            }
        }

        if (temp2 !== null) {
            temp2.next = temp !== null ? temp.next : null
            this.reload()
        } else {
            this.setState({
                head: null
            })
        }
    }
    // algorithm methods end

    renderNode = (data: number, index: number) => {
        return (
            <>
                {index !== 0 && <li className="list-group-item" style={{ border: "none" }}>
                    {"->"}
                </li>}
                <li className="list-group-item" style={{ borderLeftWidth: "1px" }}>
                    <div onMouseOver={() => {
                        var ele = document.getElementById(`ll_${index}`)
                        if (ele) {
                            ele.style.display = "inline-block"
                        }
                    }} onMouseLeave={() => {
                        var ele = document.getElementById(`ll_${index}`)
                        if (ele) {
                            ele.style.display = "none"
                        }
                    }}>
                        {data}
                        <button id={`ll_${index}`} className="btn-sm btn-danger" style={{ display: "none" }} onClick={() => this.deleteByIndex(index)}>Delete</button>
                    </div>
                </li>
            </>
        )
    }

    render() {
        let temp = this.state.head
        let arr: number[] = []
        if (temp !== null) {
            while (temp !== null) {
                arr.push(temp.data)
                temp = temp.next
            }
        }

        return (
            <div>
                <div className="jumbotron">
                    <h2>Linked List</h2>
                </div>
                <div className="form-row mt-4">
                    <div className="col-auto my-1">
                        <input type="number" name="data" id="data" placeholder="enter node" className="custom-control-input ml-2"
                            value={this.state.data ?? ""} onChange={
                                (e: React.ChangeEvent<HTMLInputElement>) => {
                                    this.setState({
                                        data: parseInt(e.currentTarget.value ? e.currentTarget.value : '0')
                                    })
                                }} />
                        <button className="btn btn-primary mx-4" onClick={this.addNode}>Add</button>
                        <button className="btn btn-primary" onClick={this.addNodeStart}>Add at Start</button>
                    </div>
                    <div className="col-auto my-2">
                        <button className="btn btn-danger mx-2" onClick={this.deleteStart}>Delete at Start</button>
                        <button className="btn btn-danger mx-2" onClick={this.deleteEnd}>Delete at End</button>
                        <button className="btn btn-danger mx-2" onClick={this.clear}>Delete All</button>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal-lg mt-4" style={{ overflowY: "auto", maxWidth: "80%" }}>
                    {
                        arr.length
                            ? arr.map(this.renderNode)
                            : <li className="list-group-item list-group-item-dark">no data</li>
                    }
                </ul>
            </div>
        )
    }
}

export default SingleLinkedList
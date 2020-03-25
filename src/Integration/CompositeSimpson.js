import React, {Component} from 'react';
import {Card, Input, Button} from 'antd';
import '../screen.css';
import 'antd/dist/antd.css';
import math from 'mathjs';
import Plot from 'react-plotly.js';

var Algebrite = require('algebrite')

var I, exact, error ,G=[];

const xValues = math.range(-10, 10, 0.5).toArray();
var fx = " ";

class Composite_Simpson extends Component {
    constructor() {
        super();
        this.state = {
            fx: "1/3*x^3",
            a: 0,
            b: 5,
            n: 10,
            showGraph: false,
        }
        //this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    composite_simpson = (a, b, n) => {
        fx = this.state.fx;
        var h = (b-a)/n

        G=[]
        G['x']=[]
        G['y']=[]
        for (var i=a ; i<b ;) {
            i+=h
            G['x'].push(i);
            G['y'].push(this.func(i).toFixed(8));
        }


        I = (h / 3) * (this.func(a) + this.func(b) + 4*this.summationFunction(1, n, h) + 2*this.summationFunction(2, n, 2*h))
        exact = this.exactIntegrate(a, b)
        error = Math.abs((exact-I) / exact) * 100
        this.setState({
            showGraph: true
        })
    }
    exactIntegrate = (a, b) => {
        var expr = math.compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
        return expr.eval({x:b}) - expr.eval({x:a})

    }
    summationFunction = (start, n, h) => {
        var sum = 0
        if (start % 2 === 0) {
            n += 2
        }
        var xi = parseInt(this.state.a) + h
        for (var i=start ; i<n ;) {
            i+=2
            sum += this.func(xi)
            xi = parseInt(this.state.a) + i*h
            
        }
        
        return sum
    }
    func = (X) => {
        var expr = math.compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }
    render() {
        return(
            <div class="content">
            <div class="container-fluid">
                
                <alert color="danger"><h1><p className="text-danger">COMPOSITE SIMPSON'S RULE</p></h1></alert>
                
                <div class="card">
                        <div class="card-body">
                            <form>
                                <div class="form-row" onChange={this.handleChange}>

                                
                                    <div class="form-group col-md-12">
                                        <label for="fx"> <p className="text-danger">input Equal</p></label>
                                        <input type="text" class="form-control" name="fx" placeholder="1/3*x^3" value={this.state.fx}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="a"><p className="text-danger">INPUT X START</p></label>
                                        <input type="text" class="form-control" name="a" placeholder="0" value={this.state.a}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="b"><p className="text-danger">INPUT X END</p></label>
                                        <input type="text" class="form-control" name="b" placeholder="5" value={this.state.b}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="n"><p className="text-danger">INPUT F(XN) SPLIT</p></label>
                                        <input type="text" class="form-control" name="n" placeholder="10" value={this.state.n}/>
                                    </div>


                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-danger btn-lg btn-block" onClick= {
                                ()=>this.composite_simpson(parseInt(this.state.a), parseInt(this.state.b), parseInt(this.state.n))
                            }>ENTER</button>
                        </div>
                </div>
                

                <br />

                {this.state.showGraph &&
                <div class="card">
                    <div class="card-body">
                        <Plot
                                data={[
                                    {
                                        x: G['x'],
                                        y: G['y'],
                                        name: "Exact",
                                        type: 'scatter',
                                        line: {shape: 'spline'},
                                        marker: {color: 'red'},
                                    },
                                
                                ]}
                                layout={ {title: 'Composite Simpsons Rule'} }
                                
                                style={{width: "100%", float:"left", height: "370px"}}
                            />  
                    </div>
                </div>
                }
                
                <br />
                {this.state.showGraph && 
                <div class="card">
                    <div class="card-body">
                            
                                    <p className="text-danger" style={{fontSize: "24px", fontWeight: "bold"}}>
                                        Approximate = {I}<br/>
                                        Exact = {exact}<br/>
                                        Error = {error}%
                                    </p>
                          
                              
                    </div>
                </div>
                }
                

            </div>
            
            </div> 

        );
    }
}
export default Composite_Simpson;
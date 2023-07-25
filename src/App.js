import React,{useState} from 'react';

import './App.css';


export default class App extends React.Component
 {
    state = {
        consumedunits:"",
        totalcurrentcharges:0,
        currentcharges:0,
        fixedcost:0,
        subsidyfixedcost:0,
        newsubsidy:0,
        netamount:0,
        
    }
  calc=(p)=>{
    this.setState(state=>{
        let c=this.state.consumedunits;
        
        if(c>=0 && c<=100)
        {
        
         return {
            
            totalcurrentcharges:0,
            currentcharges:0,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:0
       
        }}
                
        if(c>=101 && c<=200)
        {
            
        if(c>150)
        {
       
        return {
            totalcurrentcharges:100+(c-150)*3.75,
            currentcharges:100+(c-150)*3.75,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:2*(100+(c-150)*3.75)+50-250
       
        }
        }
        else
        {
            return {
            
            totalcurrentcharges:100,
            currentcharges:100,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:0,
       
        }}
        }
        
        if(c>=201 && c<=400)
        {
        if(c>250)
        {
        return {
            totalcurrentcharges:250+(c-250)*4,
            currentcharges:250+(c-250)*4,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:2*(250+(c-250)*4)+50-250
       
        }
        }
        else
        {
           return {
            
            totalcurrentcharges:250,
            currentcharges:250,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:250+250+50-250,
        }
        }
        }
        
        if(c>=401 && c<=600)
        {
        if(c>450)
        {
            
         return {
        
            totalcurrentcharges:300+(c-450)*4.25,
            currentcharges:300+(c-450)*4.25,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:2*(300+(c-450)*4.25)+50-250
       
        }
        }
        
        else
        {
            
        return {
            totalcurrentcharges:300,
            currentcharges:300,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:300+300+50-250,
        
        }
        }}
        if(c>600)
        {
        if(c>600)
        {

        return {
            totalcurrentcharges:400+(c-600)*5,
            currentcharges:400+(c-600)*5,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:2*(400+(c-600)*5)+50-250
       
        }
        }
        else
        {
            return {
                totalcurrentcharges:400,
                currentcharges:400,
                fixedcost:50,
                subsidyfixedcost:0,
                newsubsidy:250,
                netamount:400+400+50-250,
            
        }}
        }
        
        /*return {
            totalcurrentcharges:this.state.bill,
            currentcharges:this.state.bill,
            fixedcost:50,
            subsidyfixedcost:0,
            newsubsidy:250,
            netamount:a,
        }*/
    })
  }
    render()
    {
  return (
    <><center>
    <h2>Enter the consumption units</h2>
    <input id="in" type="number" value={this.state.consumedunits} onChange={(e) => this.setState({ consumedunits: e.target.value })} placeholder="UNITS CONSUMED"/>
    <button type="button" onClick={this.calc}>Calculate</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2>Displaying bill</h2>
    <table >
        <tr>
            <td>Description</td>
            <td> Amount</td>
        </tr>
        <tr >
            <td >Consumed Units:</td>
            <td id="Consumed">{this.state.consumedunits}</td>
        </tr>
        <tr>
            <td>Total Current Charges Rs. </td>
            <td id="current">{this.state.totalcurrentcharges}</td>
        </tr>
        <tr>
            <td >Current Charges Rs.</td>
            <td id="Current" >{this.state.currentcharges}</td>
        </tr>
        <tr>
            <td>Fixed Cost Rs.(+)</td>
            <td id="Fixedcost">{this.state.fixedcost}</td>
        </tr>
        <tr>
            <td>Subsidy Fixed Cost Rs.(-)</td>
            <td id="subsidy">{this.state.subsidyfixedcost}</td>
        </tr>
        <tr>
            <td >New Subsidy Rs.(-)</td>
            <td id="newsubsidy" >{this.state.newsubsidy}</td>
        </tr>
        <tr>
            <td >Net Amount Rs.</td>
            <td id="total">{this.state.netamount}</td>
        </tr>
        
    </table>
    </center>
</>
    );
}
}



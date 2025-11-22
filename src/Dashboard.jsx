import React from 'react'
import { Activity, Users, Gauge, RefreshCcw } from 'lucide-react'

export default function Dashboard() {
  return (
    <div style={{padding:24, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16}}>
      <div style={cardStyle()}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <Users size={18} />
          <h3 style={{margin:0}}>Agents</h3>
        </div>
        <div style={{fontSize:32,fontWeight:700,marginTop:12}}>32</div>
      </div>

      <div style={cardStyle()}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <Activity size={18} />
          <h3 style={{margin:0}}>Active Tasks</h3>
        </div>
        <div style={{fontSize:32,fontWeight:700,marginTop:12}}>12</div>
      </div>

      <div style={cardStyle()}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <Gauge size={18} />
          <h3 style={{margin:0}}>System Load</h3>
        </div>
        <div style={{fontSize:32,fontWeight:700,marginTop:12}}>37%</div>
      </div>

      <div style={{gridColumn:'1 / -1', ...cardStyle()}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h3 style={{margin:0}}>Recent Activity</h3>
          <button style={{padding:'6px 10px',borderRadius:8,border:'1px solid #ddd',background:'transparent',display:'flex',alignItems:'center',gap:6}}>
            <RefreshCcw size={14}/> Refresh
          </button>
        </div>

        <div style={{marginTop:12, display:'grid', gap:8}}>
          <div style={activityRow()}>CTO Agent deployed new orchestrator rules <span style={{opacity:.6}}>2m ago</span></div>
          <div style={activityRow()}>Writer Agent completed Task #104 <span style={{opacity:.6}}>10m ago</span></div>
          <div style={activityRow()}>Scheduler Agent performed heartbeat scan <span style={{opacity:.6}}>20m ago</span></div>
        </div>
      </div>
    </div>
  )
}

function cardStyle(){
  return {
    padding:16,
    borderRadius:12,
    boxShadow:'0 6px 20px rgba(12,12,12,0.06)',
    background:'#fff'
  }
}
function activityRow(){
  return {
    padding:10,
    borderRadius:10,
    border:'1px solid #eee',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  }
}

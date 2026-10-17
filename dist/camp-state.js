(function(root){
'use strict';const KEY='mc-camp-v1';
const missions=[{id:'analyzer',reward:{alloy:12,circuits:4,crystals:1}},{id:'signal',reward:{alloy:16,circuits:8,crystals:2}},{id:'supplies',reward:{alloy:18,circuits:6,crystals:3}}];
const recipes={shelter:{alloy:6,circuits:0,crystals:0},workshop:{alloy:12,circuits:4,crystals:0},analyzer:{alloy:4,circuits:2,crystals:0},comms:{alloy:14,circuits:6,crystals:2}};
function fresh(){return {version:1,completed:[],active:null,materials:{alloy:0,circuits:0,crystals:0},built:{shelter:false,workshop:false,analyzer:false,comms:false},introSeen:false}}
function valid(s){return s&&s.version===1&&Array.isArray(s.completed)&&s.completed.every(x=>missions.some(m=>m.id===x))&&new Set(s.completed).size===s.completed.length&&['alloy','circuits','crystals'].every(k=>Number.isInteger(s.materials?.[k])&&s.materials[k]>=0)&&['shelter','workshop','analyzer','comms'].every(k=>typeof s.built?.[k]==='boolean')}
function read(){try{const s=JSON.parse(root.localStorage.getItem(KEY));if(valid(s))return s}catch{}return fresh()}
function write(s){try{root.localStorage.setItem(KEY,JSON.stringify(s));return true}catch{return false}}
function unlocked(s,id){return id==='analyzer'||id==='signal'&&s.built.analyzer||id==='supplies'&&s.completed.includes('signal')&&s.built.shelter}
function start(s,id){if(!missions.some(m=>m.id===id)||s.completed.includes(id)||!unlocked(s,id)||s.active&&s.active!==id)return false;s.active=id;return true}
function reward(s){const m=missions.find(m=>m.id===s.active);if(!m||s.completed.includes(m.id))return null;for(const k of Object.keys(m.reward))s.materials[k]+=m.reward[k];s.completed.push(m.id);s.active=null;return m}
function canBuild(s,key){if(!recipes[key]||s.built[key])return false;if(key==='analyzer'&&!s.completed.includes('analyzer'))return false;if(key==='workshop'&&(!s.built.shelter||!s.built.analyzer))return false;if(key==='comms'&&(!s.built.workshop||!s.completed.includes('signal')))return false;return Object.entries(recipes[key]).every(([k,v])=>s.materials[k]>=v)}
function build(s,key){if(!canBuild(s,key))return false;for(const [k,v]of Object.entries(recipes[key]))s.materials[k]-=v;s.built[key]=true;return true}
const api={KEY,missions,recipes,fresh,valid,read,write,unlocked,start,reward,canBuild,build,completeBattle(){const s=read(),m=reward(s);if(m){write(s);return m}return null}};root.MCCamp=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

//generic stats object

let p1Name = "Jacob";

let p1Stats = {
  hp: 150
  mp: 50 
  atk: 100
  def: 50
  sp: 50

}

let p2Name = "Charlie";

let p2Stats = {
  hp: 25
  mp: 175
  atk:20
  def:30
  sp:150

}

let battle = {

  attack: function(){},
  defend: function(){}

} 

let p1Battle = {
  attack: function(mv){
    if(mv == 1){
      return this.moves.punch();
    }
    else if(mv == 2){
      return this.moves.other();
    }
  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.defend
    this.stats.hp = this.stats.hp - rawDamage;
    if(this.stats.hp <0){
      this.stats.hp =0;
    }

  }

}


let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75 + 
    let bonus = 0.5*this.stats.atk*Math.randon(){
      return baseDamage + bonus;
    },
    charge: function(){
      let pain = Math.random();
      let bonus = 0.5*this.stats.atk*Math.random(){
      if(pain < 0.50){
        this.stats.hp = this.stats.hp - this.stats.atk/4;
        return this.stats.atk+bonus;
      }
      else{
        //no self damage
        return this.stats.atk+bonus;
      }
    }
  }

  gohun: function(){
    let bonus = 2 * this.stats.atk * Math.random();
    return bonus;
  },

  roundhouseKick: function(){
    let baseDamage = this.stats.atk * 0.5;
    let tetradice = Math.random();
    if(tetradice < 0.33){
      return baseDamage;

    }
    else if (tetradice < 0.66){
      return 2 * baseDamage;

    }
    else{
      return 3 * baseDamage;

    }

  let magic = {
    hydroPump: function(){
      if(this.stats.mp >= 8){
        this.stats.mp = this.stats.mp -8;
        let tetradice = Math.random();
        let pump = Math.ceil(this.stats.sp/3);
        if(tetradice <0.10){
          return pump;
        }
        else if(tetradice <0.30){
          return 2*pump;
        }
        else if(tetradice <0.60){
          return 3*pump;
        }
        else{
          return 4*bump;
        }
      }
      },
        falconPunch: function(){
          let baseDamage = this.stats.atk * 0.5;
          let bonus = this.stats.atk * Math.random();
          return baseDamage + bonus; 

        },

        hyperBeam : function(){
          if(this.stats.mp >= 20){
            this.stats.mp = this.stats.mp - 20;
            let beam = this.stats.sp * 1.5;
            return beam;
          }

        }

      }

      let p1Moves = {

      }


      let player1
          



        

 






















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}

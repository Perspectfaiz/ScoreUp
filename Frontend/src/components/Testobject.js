const question1 = {
  state: 0,
  qstat: null,
  qnstat: "What is the unit of electrical resistance?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Resistor.svg/512px-Resistor.svg.png",
  options: ['Ohm', 'Watt', 'Volt', 'Ampere'],
  ans: null,
};

const question2 = {
  state: 0,
  qstat: null,
  qnstat: "Which law explains the inverse relationship between pressure and volume of gas?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Boyle%27s_Law_Graph.svg/640px-Boyle%27s_Law_Graph.svg.png",
  options: ['Boyle’s Law', 'Newton’s Law', 'Faraday’s Law', 'Ohm’s Law'],
  ans: null,
};

const question3 = {
  state: 0,
  qstat: null,
  qnstat: "What is the speed of light in a vacuum?",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Speed_of_light_diagram.png",
  options: ['3×10⁸ m/s', '1.5×10⁸ m/s', '3×10⁶ m/s', 'None'],
  ans: null,
};

const question4 = {
  state: 0,
  qstat: null,
  qnstat: "Which subatomic particle carries no electrical charge?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Quark_structure_neutron.svg/640px-Quark_structure_neutron.svg.png",
  options: ['Electron', 'Proton', 'Neutron', 'Positron'],
  ans: null,
};

const question5 = {
  state: 0,
  qstat: null,
  qnstat: "Which instrument is used to measure electric current?",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ammeter_analog.jpg",
  options: ['Voltmeter', 'Ammeter', 'Ohmmeter', 'Barometer'],
  ans: null,
};

const question6 = {
  state: 0,
  qstat: null,
  qnstat: "What is the SI unit of power?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Light_bulb_icon.svg/512px-Light_bulb_icon.svg.png",
  options: ['Watt', 'Joule', 'Newton', 'Tesla'],
  ans: null,
};

const question7 = {
  state: 0,
  qstat: null,
  qnstat: "Which force keeps the planets in their orbits around the Sun?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Orbit_of_the_planets_en.svg/640px-Orbit_of_the_planets_en.svg.png",
  options: ['Magnetic', 'Gravitational', 'Centrifugal', 'Frictional'],
  ans: null,
};

const question8 = {
  state: 0,
  qstat: null,
  qnstat: "What kind of lens is typically used in a magnifying glass?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lens3.svg/640px-Lens3.svg.png",
  options: ['Convex', 'Concave', 'Plano-convex', 'Cylindrical'],
  ans: null,
};

const question9 = {
  state: 0,
  qstat: null,
  qnstat: "What is the molecular formula of water?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Water_molecule_3D.svg/640px-Water_molecule_3D.svg.png",
  options: ['H2O', 'CO2', 'O2', 'H2SO4'],
  ans: null,
};

const question10 = {
  state: 0,
  qstat: null,
  qnstat: "What is the pH value of a neutral substance?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/PHS.png/640px-PHS.png",
  options: ['7', '0', '14', '1'],
  ans: null,
};

const question11 = {
  state: 0,
  qstat: null,
  qnstat: "What is the derivative of sin(x)?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sine_derivative_animation.gif/320px-Sine_derivative_animation.gif",
  options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
  ans: null,
};

const question12 = {
  state: 0,
  qstat: null,
  qnstat: "What is the approximate value of π (pi)?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pi-symbol.svg/640px-Pi-symbol.svg.png",
  options: ['3.14', '2.71', '1.61', '1.41'],
  ans: null,
};

const question13 = {
  state: 0,
  qstat: null,
  qnstat: "Which of the following is a prime number?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Prime_number.svg/512px-Prime_number.svg.png",
  options: ['9', '15', '17', '21'],
  ans: null,
};

const question14 = {
  state: 0,
  qstat: null,
  qnstat: "What is the formula for the area of a circle with radius r?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Circle-area.svg/640px-Circle-area.svg.png",
  options: ['πr²', '2πr', 'πd²', 'πr'],
  ans: null,
};

const question15 = {
  state: 0,
  qstat: null,
  qnstat: "What is the value of 5 factorial (5!)?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Factorial_function_graph.svg/640px-Factorial_function_graph.svg.png",
  options: ['120', '25', '60', '100'],
  ans: null,
};

const question16 = {
  state: 0,
  qstat: null,
  qnstat: "Solve the expression: (x + 3)(x − 3) = ?",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Simple_equation_graph.svg/640px-Simple_equation_graph.svg.png",
  options: ['x²−9', 'x²+6x+9', 'x²−6x+9', 'x²+9'],
  ans: null,
};


const sub1 = {
  subName: "Physics",
  list: [question1, question2, question3, question4, question5, question6, question7, question8],
};

const sub2 = {
  subName: "Chemistry",
  list: [question9, question10],
};

const sub3 = {
  subName: "Maths",
  list: [question11, question12, question13, question14, question15, question16],
};

const testObj = {
  details: {
    title: "Test Template ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "test_id.1",
    teacherId: "T.userName",
    teachername: "yajya parama",
    time: 70,
    attempted: 5,
    avgScore: 69,
    tag: "All",
  },
  section: [sub1, sub2, sub3],
};

export default testObj;

export let data: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
			isParent:true,
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 2, DurationUnit:'day', Progress: 50,isParent:false },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 12,DurationUnit:'hour', Progress: 70, resources: [2, 3, 5],isParent:false   },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 240,DurationUnit:'minute', Predecessor:"2FS", Progress: 80,isParent:false  },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
			isParent:true,
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, DurationUnit:'hour', Progress: 50, resources: [4],isParent:false  },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, DurationUnit:'day', resources: [4, 8],isParent:false  },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 480,Predecessor:"6SS", DurationUnit:'minute', Progress: 70, resources: [12, 5],isParent:false  }
            ]
        },
    ];
	
export let ganttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
			isParent:true,
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: '3days', DurationUnit:'day', Progress: 50,isParent:false },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: '12hours',DurationUnit:'hour', Progress: 70, resources: [2, 3, 5],isParent:false   },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: '1800minutes',DurationUnit:'minute', Predecessor:"2FS", Progress: 80,isParent:false  },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
			isParent:true,
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: '12hours', DurationUnit:'hour', Progress: 50, resources: [4],isParent:false  },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: '3days', Progress: 50, DurationUnit:'day', resources: [4, 8],isParent:false  },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: '480minutes',Predecessor:"6SS", DurationUnit:'minute', Progress: 70, resources: [12, 5],isParent:false  }
            ]
        },
    ];
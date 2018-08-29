import { trigger, state, style, transition,
    animate, query, stagger, keyframes
} from '@angular/animations';

export const Animations = [

    /**Side in and out animation with paramter , the font size parameter is passed from the html and it can be defined dynamicly**/
    trigger('slideInOut', [
        state('true', style({
            fontSize: '{{fontSize}}em',
            opacity: 1,
            transform: 'translateX(50%)  rotateY(0)'
        }),  {params: {fontSize: '1'}}),
        state('false',   style({
            fontSize: '1em',
            opacity: 0,
            transform: 'translateX(0)    rotateY(0)'
        })),
        transition('true => false', animate('600ms ease-out')),
        transition('false => true', animate('1000ms ease-in'))
    ]),

    /**Popover animation with standard opacity change when paramter is changing**/
    trigger('popOverState', [
        state('true', style({
            opacity: 1
        })),
        state('false',   style({
            opacity: 0
        })),
        transition('true => false', animate('600ms ease-out')),
        transition('false => true', animate('1000ms ease-in'))
    ]),
    /**List animation being triggered on list enter of element enter in the structual directives.**/
    trigger('listAnimation', [
        transition('* => *', [ // each time the binding value changes
            query(':leave', [
                stagger(100, [
                    animate('0.5s', style({ opacity: 0 }))
                ])
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0 }),
                stagger(100, [
                    animate('0.5s', style({ opacity: 1 }))
                ])
            ], { optional: true })
        ])
    ]),
    /**List animation with keyframes being triggered on list enter of element enter in the structual directives.**/
    trigger('listKeyframesAnimation', [
        transition('* => *', [

            query(':enter', style({ opacity: 0 }), {optional: true}),

            query(':enter', stagger('300ms', [
                animate('1s ease-in', keyframes([
                    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                    style({opacity: .5, transform: 'translateY(35px)',  offset: 0.1}),
                    style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
                ]))]), {optional: true})
        ])
    ])
]

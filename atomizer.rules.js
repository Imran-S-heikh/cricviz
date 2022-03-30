module.exports = [
    {
        'type': 'pattern',
        'name': 'Grid Template Row',
        'matcher': 'Gtr',
        'allowParamToValue': true,
        'styles': {
            'grid-template-rows': '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9'
        },
        'arguments': [
            {
                'a': 'auto',
                'fitc': 'fit-content',
                'minc': 'min-content',
                'maxc': 'max-content',
            }
        ]
    },
    {
        'type': 'pattern',
        'name': 'Grid Template Rows With Reapeat',
        'matcher': 'Gtrr',
        'allowParamToValue': true,
        'styles': {
            'grid-template-rows': 'repeat($1, $0)'
        },
        'arguments': [
            {
                'a': 'auto',
                'fitc': 'fit-content',
                'minc': 'min-content',
                'maxc': 'max-content',
            }
        ]
    },
    {
        'type': 'pattern',
        'name': 'Grid Auto Flow',
        'matcher': 'Gaf',
        'allowParamToValue': false,
        'styles': {
            'grid-auto-flow': '$0'
        },
        'arguments': [
            {
                'r': 'row',
                'c': 'column',
                'd': 'dense',
                'rd': 'row dense',
                'cd': 'column dense',
            }
        ]
    },
    {
        'type': 'pattern',
        'name': 'Grid Template Column',
        'matcher': 'Gtc',
        'allowParamToValue': true,
        'styles': {
            'grid-template-columns': '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9'
        }
    },
    {
        'type': 'pattern',
        'name': 'Grid Template Column With Reapeat',
        'matcher': 'Gtcr',
        'allowParamToValue': true,
        'styles': {
            'grid-template-columns': 'repeat($0, minmax(0$1,1fr))'
        },
        'arguments': [
            {
                'afit': 'auto-fit',
                'afill': 'auto-fill'
            }
        ]
    },
    {
        'type': 'pattern',
        'name': 'Grid/Flex Gap',
        'matcher': 'Gap',
        'allowParamToValue': true,
        'styles': {
            'gap': '$0 $1'
        }
    },
    {
        'type': 'pattern',
        'name': 'Grid Row',
        'matcher': 'Gr',
        'allowParamToValue': true,
        'styles': {
            'grid-row': '$0/$1'
        }
    },
    {
        'type': 'pattern',
        'name': 'Grid Column',
        'matcher': 'Gc',
        'allowParamToValue': true,
        'styles': {
            'grid-column': '$0/$1'
        }
    },
    {
        'type': 'pattern',
        'name': 'Grid Column Start',
        'matcher': 'Gcstart',
        'allowParamToValue': true,
        'styles': {
            'grid-column-start': '$0'
        }
    },

]
import IMask from 'imask';

function inputMasks(){
    document.querySelectorAll('.input_phone').forEach((e) => {
        const phoneMask = IMask( e, { mask: '+{7}(000)000-00-00' })
    }) 

    const timeMask = IMask(document.querySelector('.input_time'), {
        mask: 'HH:MM',
        blocks: {
            HH: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 23,
            maxLength: 2
            },
            MM: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 59,
            maxLength: 2
            }
        }
    });

    const dateMask = IMask(document.querySelector('.input_date'), {
        mask: Date,
        pattern: 'DD.MM.YYYY',
        blocks: {
            DD: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2,
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            YYYY: {
                mask: IMask.MaskedRange,
                from: 1900,
                to: 9999,
            },
        },
    });
}

export default inputMasks;
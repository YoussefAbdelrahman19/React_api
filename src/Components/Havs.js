import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const HavsCalculator = () => {
  const [tool, setTool] = useState('');
  const [output, setOutput] = useState('');
  const [minutes, setMinutes] = useState('');
  const [result, setResult] = useState('');

  const { t } = useTranslation();

  const calculate = () => {

    const calculatedValue = output * minutes;


    var riskLevel;
    if (calculatedValue >= 24) {
      riskLevel = t('high');
    } else if (calculatedValue >= 8) {
      riskLevel = t('medium');
    } else {
      riskLevel = t('low');
    }
    setResult(`${Math.round((calculatedValue / 24) * 100)}% ${riskLevel}`);

  }



  return (
    <>
      <div className='container my-2'>
        <div className='row'>

          <div className='col-6 p-1 input-group row '>
            <label className='input-group-text px-2 fs-5 col-2'>{t('Tool')}</label>
            <input className='form-control' type="text" placeholder={t('e.g. Hammer drill')} value={tool} onChange={e => setTool(e.target.value)} />
          </div>


          <div className='col-3 col-6 p-1 input-group row '>
            <label className='input-group-text px-2 fs-5 col-2'>{t('Output (m/s²)')}</label>
            <input className='form-control' type="number" placeholder={t('What vibration level?')} value={output} onChange={e => setOutput(e.target.value)} />
          </div>


          <div className='col-3 col-6 p-1 input-group row '>
            <label className='input-group-text px-2 fs-5 col-2'>{t('Minutes')}</label>
            <input className='form-control' type="number" placeholder={t('How long will you use it?')} value={minutes} onChange={e => setMinutes(e.target.value)} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row input-group'>
          <button className='btn btn-primary p-2 ' onClick={calculate}>{t('Calculate')}</button>
        </div>
      </div>



      <div className='container bg-light my-4 fs-5'>
        <div className='row border border-1 py-3'>
          <p className=''>RESULT</p>
          <p className='fw-bold fs-4' style={{ color: '#2ECC71' }}>{result}</p>
          <p>A {tool} with a vibration output of {output}m/s² reaches the EAV (Exposure Action Value) <br /> in {minutes}mins and the ELV (Exposure Limit Value).</p>
        </div>
      </div>



    </>
  );
};

export default HavsCalculator;

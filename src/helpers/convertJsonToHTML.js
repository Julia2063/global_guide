export const convertJsonToHTML = (text) => Object.entries(text).map(el => {
  switch (el[0].replace(/\d/g,'')) {
  case 'p':
    return <p key={el[0]}>{el[1]}</p>;

  case 'ul':
    return (
      <ul key={el[0]}>
        <p>{el[1][0]}</p>
        {el[1][1].map(e => {
          return Array.isArray(e)
            ? <li key={e[0]}>
              <p>{e[0]}</p>
              <ol>
                {e[1].map(l => {
                  return (
                    <li key={l}>{l}</li>
                  );
                })}
              </ol>
            </li>
              
            :<li key={e}>{e}</li>;
        })}
      </ul>
    );

  case 'ul-with-strong':
    return (
      <ul key={el[0]}>
        <p><strong>{el[1][0]}</strong></p>
        {el[1][1].map(e => {
          return Array.isArray(e)
            ? <li key={e[0]}>
              <p>{e[0]}</p>
              <ol>
                {e[1].map(l => {
                  return (
                    <li key={l}>{l}</li>
                  );
                })}
              </ol>
            </li>
              
            :<li key={e}>{e}</li>;
        })}
      </ul>
    );

  case 'ol': 
    return (
      <ol key={el[0]}>
        <p>{el[1][0]}</p>
        {el[1][1].map(e => {
          return <li key={e}>{e}</li>;
        })}
      </ol>
    );

  case 'h-three':
    return <h3 key={el[0]}>{el[1]}</h3>;

  case 'h-four':
    return <h4 key={el[0]}>{el[1]}</h4>;

  case 'p-with-custom':
    const p = Object.entries(el[1]);
    return (
      <p key={el[0]}>
        {p.map(e => {
          switch (e[0].replace(/\d/g,'')) {
          case 'strong':
            return <strong key={e[0]}>{e[1]}</strong>;
              
          case 'underline':
            return (
              <span 
                className="itemPage__underline" 
                key={e[0]}
              >
                {e[1]}
              </span>
            );
              

          case 'link':
            return <a href={e[1][0]} key={e[0]}>{e[1][1]}</a>;
              
          default: 
            return e[1];
          }
        })}
      </p>
    );

  case 'table':
    const table = Object.entries(el[1]);
    return (
      <table key={el[0]}>
        <tbody>
          {table.map(e => {
            switch (e[0].replace(/\d/g,'')) {
            case 'th':
              const tableTitle = Object.entries(e[1]);
              return (
                  
                <tr key={e[0]}>
                  {tableTitle.map(l => {
                    return (
                      <th colSpan={l[0].replace(/\D/g,'')} key={l}>{l[1]}</th>
                    );
                  })}
                </tr>
                 
              );

            case 'td':
              return (
                
                <tr key={e[0]}>
                  {e[1].map((l, i) => {
                    return (
                      <td key={i}>{l}</td>
                    );
                  })}
                </tr>
              );

            default: 
              return e[1];
            }
          })} 
        </tbody>
      </table>
    );
      
  default:
    return [el[1]];
  }
});
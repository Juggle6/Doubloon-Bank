import styles from './page.module.css';

export default function Accounts() {
  // A sample list of a bunch of random accounts that I will render
  const accounts = [
    {
      id: 1,
      owners: ["Juggle"],
      administrators: [],
      type: "Chequing",
      balance: 32968,
    },
    {
      id: 2,
      owners: ["Juggle"],
      administrators: [],
      type: "Savings",
      balance: 53092,
    },
    {
      id: 3,
      owners: ["Nico"],
      administrators: [],
      type: "Chequing",
      balance: 297,
    },
    {
      id: 4,
      owners: ["Gylve"],
      administrators: [],
      type: "Chequing",
      balance: 4008,
    },
    {
      id: 5,
      owners: ["Florian"],
      administrators: [],
      type: "Chequing",
      balance: 6708,
    }
  ]

  return (
    <main>
      <h1>Accounts</h1>
      <table className={styles.accountsContainer}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Owner(s)</th>
            <th>Administrators</th>
            <th>Type</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => <tr>
            <td>{account.id}</td>
            <td>{account.owners}</td>
            <td>{account.administrators}</td>
            <td>{account.type}</td>
            <td>{account.balance}</td>
            <td>
              <button type="button">+</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </main>
  )
}

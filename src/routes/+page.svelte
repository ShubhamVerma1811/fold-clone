<script>
	import BankCard from '../components/BankCard.svelte';
	import CashFlow from '../components/CashFlow.svelte';
	import Header from '../components/Header.svelte';
	import SpendingStats from '../components/SpendingStats.svelte';
	import Transaction from '../components/Transaction.svelte';

	const banks = [
		{
			id: 1,
			name: 'ICICI Bank',
			accountNumber: '644436436322',
			isWorking: true,
			balance: 100000
		},
		{
			id: 2,
			name: 'HDFC Bank',
			accountNumber: '644436436322',
			isWorking: false,
			balance: 34234
		},
		{
			id: 3,
			name: 'SBI Bank',
			accountNumber: '644436436322',
			isWorking: true,
			balance: 56756756
		}
	];

	const transactions = [
		{
			id: 1,
			name: 'Spotify',
			amount: 119472.69,
			date: new Date('1/2/2021'),
			type: 'Subscription'
		},
		{
			id: 2,
			name: 'Netflix',
			amount: 112.69,
			date: new Date('2/1/2021'),
			type: 'Subscription'
		},
		{
			id: 3,
			name: 'Groceries',
			amount: 45332,
			date: new Date('1/1/2021'),
			type: 'Expense'
		}
	];

	const spendingsCategories = [
		{
			id: 1,
			name: 'Food',
			amount: 119472.69,
			date: 'Yesterday',
			type: 'Subscription'
		},
		{
			id: 2,
			name: 'Entertainment',
			amount: 2112.69,
			date: '2 days ago',
			type: 'Subscription'
		},
		{
			id: 3,
			name: 'Groceries',
			amount: 45332,
			date: '1 week ago',
			type: 'Expense'
		}
	];

	const totalSpendings = spendingsCategories.reduce((acc, curr) => acc + curr.amount, 0);

	let activeBankId = 1;
	let activeMonth = 1;

	$: monthlySpending = transactions.filter(
		(transaction) => transaction.date.getMonth() + 1 == activeMonth
	);

	$: getActiveBank = banks.find((bank) => bank.id === activeBankId);
</script>

<Header />

<main class="my-16">
	<div class="my-8 flex">
		<p class="text-lg font-bold text-[#20294C]">Good Morning, Shubham!</p>

		<!-- dropdown for choosing Month -->
		<div class="mr-0 ml-auto">
			<select
				class="mt-4 rounded-md border border-[#979DB5] px-4 py-2"
				on:change={(e) => {
					activeMonth = e?.target?.value;
				}}
			>
				<option value="1">January</option>
				<option value="2">February</option>
				<option value="3">March</option>
				<option value="4">April</option>
				<option value="5">May</option>
				<option value="6">June</option>
				<option value="7">July</option>
				<option value="8">August</option>
				<option value="9">September</option>
				<option value="10">October</option>
				<option value="11">November</option>
				<option value="12">December</option>
			</select>
		</div>
	</div>

	<div class="xl:grid grid-cols-4 gap-4">
		<div class="col-span-3">
			<div class="col-span-2">
				<div class="grid grid-cols-3 gap-4">
					<div class="p-5 border bg-white rounded-2xl shadow-lg col-span-2">
						<div>
							<div>
								<div>
									<div class="flex">
										<span class="font-md mr-1 text-[#979DB5]"> - ₹ </span>
										<p class="text-2xl font-bold text-[#20294C]">
											{getActiveBank?.balance}
										</p>
									</div>

									<div class="my-4 border" />

									<div class="flex flex-row items-center">
										{#each banks as bank}
											<button
												class={`mr-4 flex flex-row items-center rounded-full px-4 py-2
												${activeBankId === bank.id ? 'bg-[#F06321]' : 'bg-[#20294C]'}
												`}
												on:click={() => {
													activeBankId = bank.id;
												}}
											>
												<svg
													width="19"
													height="20"
													viewBox="0 0 19 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.22654 4.34442C9.7935 -0.188957 15.3339 -1.36552 17.5511 1.72443C19.7683 4.81438 17.8197 11.0597 13.2527 15.5931C8.68575 20.1601 3.14533 21.335 0.89458 18.2114C-1.28735 15.0896 0.661277 8.87613 5.22654 4.34442Z"
														fill="#F06321"
													/>
													<path
														d="M8.24911 1.92542C7.74559 2.29467 7.24206 2.73105 6.73854 3.20269C2.74225 7.16373 1.06215 12.6035 3.04436 15.3242C5.09201 18.0432 9.99464 17.0361 14.0916 13.0398C16.3088 10.8915 17.7858 8.40576 18.39 6.08955C18.5579 4.37757 18.3229 2.86533 17.5508 1.72401C15.8053 -0.6929 12.044 -0.493171 8.24911 1.92542Z"
														fill="#AE282E"
													/>
													<path
														d="M14.0247 2.42908V2.52978C13.9912 3.10044 13.6555 3.80537 13.0513 4.4096C12.1449 5.28237 10.9365 5.61805 10.4313 5.11621C9.86061 4.57912 10.198 3.40255 11.1043 2.46264C12.0442 1.5563 13.2527 1.25419 13.7562 1.79128C13.924 1.95912 14.0247 2.16053 14.0247 2.42908ZM10.5336 17.8419C8.3836 19.4532 6.1681 20.2605 4.01807 19.9248C4.92441 19.9584 5.66458 18.9497 6.2688 17.6069C6.87303 16.2306 7.20871 14.955 7.51082 13.7449C7.9472 11.8315 7.98079 10.4888 7.7458 10.1867C7.37655 9.71505 6.57091 9.81743 5.62933 10.3545C5.15937 10.6231 4.55515 10.4552 5.26176 9.58246C6.00026 8.70968 8.85356 6.62677 9.8606 6.29109C11.0036 5.98898 12.2792 6.42537 11.8428 7.66739C11.539 8.57373 7.57797 18.9161 10.5336 17.8419Z"
														fill="#1F1F1F"
													/>
												</svg>

												<p class="ml-3 text-[#fff]">7.9K</p>
											</button>
										{/each}
									</div>
								</div>
							</div>
							<div class="my-4 flex flex-row flex-nowrap items-center overflow-auto">
								<!-- {#each banks as bank}
								<BankCard {bank} />
								{/each} -->

								<!-- ONLY SHOW ACTIVE BANK -->
								{#each banks as bank}
									{#if activeBankId === bank.id}
										<BankCard {bank} />
									{/if}
								{/each}
							</div>
						</div>
					</div>

					<div class="col-span-1 h-max rounded-2xl">
						<CashFlow />
					</div>
				</div>
			</div>

			<!-- CAT -->
			<div class="rounded-2xl border overflow-clip bg-white my-4">
				<div class="border-b-2 flex flex-row items-center justify-between px-3 py-4">
					<p class="text-lg uppercase text-[#676B89]">October 23</p>
					<!-- <p class="text-base font-bold text-[#676B89]">{"transaction.date"}</p> -->
				</div>
				<div class="m-4">
					{#each spendingsCategories as cat}
						<!-- {console.log(totalSpendings, Math.floor(cat.amount / totalSpendings) * 100)} -->
						<SpendingStats {cat} {totalSpendings} />
					{/each}
				</div>
			</div>
		</div>

		<!--  -->

		<div class="col-span-1 h-max rounded-2xl">
			<div class="flex flex-col gap-4">
				{#if monthlySpending.length}
					{#each monthlySpending as transaction}
						<Transaction {transaction} />
					{/each}
				{:else}
					<div class="rounded-2xl border overflow-clip bg-white">
						<div class="flex flex-row items-center justify-between px-3 py-4">
							<p class="text-lg font-bold text-[#676B89]">No Transactions</p>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>

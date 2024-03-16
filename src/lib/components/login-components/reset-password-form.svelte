<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Loader from '../general-components/loader.svelte';
	import type { ResultModel } from '$lib/types';
	import { fade } from 'svelte/transition';
	import UpdatePasswordForm from './update-password-form.svelte';
	import { staticComponent } from '$lib';

	export let email: string = '';

	type ResetCodeVal = {
		passwordResetCode: string[];
	};

	type UpdatePasswordAction = {
		msg: string;
		errors: ResetCodeVal;
	};

	let formActionErrors: ResetCodeVal | null = null;
	let passwordResetCodeLoader = false;
	let dbMessage = '';

	const passwordResetCodeActionNews: SubmitFunction = () => {
		passwordResetCodeLoader = true;
		return async ({ result, update }) => {
			const {
				status,
				data: { msg, errors }
			} = result as ResultModel<UpdatePasswordAction>;

			switch (status) {
				case 200:
					dbMessage = msg;
					formActionErrors = null;
					passwordResetCodeLoader = false;
					$staticComponent.showUpdatePassUI = true;
					break;

				case 400:
					dbMessage = '';
					formActionErrors = errors;
					passwordResetCodeLoader = false;
					break;

				case 401:
					dbMessage = msg;
					formActionErrors = null;
					passwordResetCodeLoader = false;
					break;

				default:
					break;
			}
			await update();
		};
	};
</script>

{#if $staticComponent.showUpdatePassUI}
	<UpdatePasswordForm />
{:else}
	<form
		method="post"
		action="?/passwordResetCodeAction"
		enctype="multipart/form-data"
		use:enhance={passwordResetCodeActionNews}
		class="flex flex-col gap-[23px] w-full mt-[21px]"
	>
		<div class="">
			<label for="passwordResetCode" class="text-[22px] text-main">Password Reset Code</label>
			<input name="email" type="email" value={email} class="hidden" hidden />
			<input
				id="passwordResetCode"
				type="text"
				name="passwordResetCode"
				class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
				placeholder=""
			/>
		</div>

		{#each formActionErrors?.passwordResetCode ?? [] as errorMsg}
			<span class="text-main" transition:fade>{errorMsg}</span>
		{/each}

		<p class="text-main text-center {dbMessage ? 'flex' : 'hidden'}" transition:fade>{dbMessage}</p>

		<button class="font-bold text-white flex justify-center w-full bg-main py-[19px] rounded-lg">
			<Loader name="CONTINUE" loader={passwordResetCodeLoader} loaderName="CHECKING..." />
		</button>
	</form>
{/if}

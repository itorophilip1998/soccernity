<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInterestInRequest;
use App\Http\Requests\UpdateInterestInRequest;
use App\Models\InterestIn;

class InterestInController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreInterestInRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInterestInRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InterestIn  $interestIn
     * @return \Illuminate\Http\Response
     */
    public function show(InterestIn $interestIn)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InterestIn  $interestIn
     * @return \Illuminate\Http\Response
     */
    public function edit(InterestIn $interestIn)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInterestInRequest  $request
     * @param  \App\Models\InterestIn  $interestIn
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInterestInRequest $request, InterestIn $interestIn)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InterestIn  $interestIn
     * @return \Illuminate\Http\Response
     */
    public function destroy(InterestIn $interestIn)
    {
        //
    }
}

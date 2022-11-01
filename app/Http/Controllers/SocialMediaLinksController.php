<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSocialMediaLinksRequest;
use App\Http\Requests\UpdateSocialMediaLinksRequest;
use App\Models\SocialMediaLinks;

class SocialMediaLinksController extends Controller
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
     * @param  \App\Http\Requests\StoreSocialMediaLinksRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSocialMediaLinksRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SocialMediaLinks  $socialMediaLinks
     * @return \Illuminate\Http\Response
     */
    public function show(SocialMediaLinks $socialMediaLinks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SocialMediaLinks  $socialMediaLinks
     * @return \Illuminate\Http\Response
     */
    public function edit(SocialMediaLinks $socialMediaLinks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSocialMediaLinksRequest  $request
     * @param  \App\Models\SocialMediaLinks  $socialMediaLinks
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSocialMediaLinksRequest $request, SocialMediaLinks $socialMediaLinks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SocialMediaLinks  $socialMediaLinks
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialMediaLinks $socialMediaLinks)
    {
        //
    }
}

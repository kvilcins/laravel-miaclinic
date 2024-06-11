<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PageSlugByUuid
 * 
 * @property string|null $uuid
 * @property int $id
 * @property string $slug
 * @property int|null $parent_id
 *
 * @package App\Models
 */
class PageSlugByUuid extends Model
{
	protected $table = 'page_slug_by_uuid';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id' => 'int',
		'parent_id' => 'int'
	];

	protected $fillable = [
		'uuid',
		'id',
		'slug',
		'parent_id'
	];
}
